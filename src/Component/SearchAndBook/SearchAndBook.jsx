import React, { useEffect, useState } from "react";
import Styles from "./SearchAndBook.module.css";
import HospitalCard from "./HospitalCard/HospitalCard";

import { config } from "../../App";

import { SiTicktick } from "react-icons/si";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";

const SearchAndBook = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  const [stateValue, setStateValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchStates = () => {
    try {
      fetch(`${config.endpoint}/states`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setStates(data);
          console.log(data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const fecthCities = () => {
    try {
      fetch(`${config.endpoint}/cities/${stateValue}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCities(data);
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    try {
      fetch(
        `https://meddata-backend.onrender.com/data?state=${stateValue}&city=${cityValue}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setHospitals(data);
          setFilteredHospitals(data);
          console.log(filteredHospitals.length);

          console.log(data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fecthCities();
  }, [stateValue]);

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.design}></div>
{/* -----------------------Search Bar---------------------- */}
      <div className={Styles.search}>
        <select
          name=""
          id=""
          value={stateValue}
          onChange={(e) => setStateValue(e.target.value)}
        >
          <option value="">State</option>
          {states.map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })}
        </select>
        <select
          name=""
          id=""
          value={cityValue}
          onChange={(e) => {
            setCityValue(e.target.value);
          }}
        >
          <option value="">City</option>
          {cities.map((city, index) => {
            return (
              <option key={index} value={city}>
                {city}
              </option>
            );
          })}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* ========================================================= */}

      <div className={Styles.hospitals}>
        <div className={Styles.numberOfCentersHeading}>
          <h4>
            {filteredHospitals.length > 0 ? (
              <span>
                {filteredHospitals.length} medical centers available in{" "}
                {stateValue}
              </span>
            ) : (
              <span>Choose Your State</span>
            )}
          </h4>
          <div className={Styles.tick}>
            <SiTicktick />
            <h6 style={{ fontWeight: "500", opacity: "0.5" }}>
              Book appointments with minimum wait-time & verified doctor details
            </h6>
          </div>
        </div>
        {/* ===================================== */}
        <div className={Styles.bodyHost}>
          <div className={Styles.hospitalsList}>
            {filteredHospitals.map((hospital, index) => {
              return (
                <HospitalCard
                  key={index}
                  city={hospital.City}
                  state={hospital.State}
                  name={hospital["Hospital Name"]}
                  rating={hospital["Hospital overall rating"]}
                  type={hospital["Hospital Type"]}
                />
              );
            })}
          </div>
          {/* -------------Side Banner----------------- */}
          <div className={Styles.sideBanner}>
            <p>The World Oral Health Day,</p>
            <h5>
              Get a <span style={{ color: "#2aa7ff" }}>FREE</span> Appointment*
              with Top Dentists.
            </h5>
            <span
              style={{
                margin: "15px 0",
                backgroundColor: "#2aa7ff",
                width: "fit-content",
                color: "white",
              }}
            >
              <p>LIMITED PERIOD OFFER</p>
            </span>
            <p>#BeSensitiveToOralHealth</p>
            <h6>*T&C Apply</h6>
          </div>
          {/* ========================= */}
        </div>
      </div>

      {/* -------------------------- */}
      <FrequentlyAskedQuestion />
    </div>
  );
};

export default SearchAndBook;
