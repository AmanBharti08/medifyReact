import React, { useEffect, useState } from "react";

import logo from "../../Assets/hospitalLogo.png";
import { AiFillLike } from "react-icons/ai";
import Styles from "./BookingPanel.module.css";

const BookingPanel = () => {
  const [hospitals, setHospitals] = useState([]);

  const fetchBookedHospiltals = () => {
    const bookedKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("booking-")
    );

    const bookedHospitals = bookedKeys.map((key) => {
      const booking = JSON.parse(localStorage.getItem(key));
      return {
        name: booking.hospital,
        city: booking.city,
        state: booking.state,
        rating: booking.rating,
        type: booking.type,
        date: booking.date,
        time: booking.time,
      };
    });

    setHospitals(bookedHospitals);
  };

  useEffect(() => {
    fetchBookedHospiltals();
  }, []);
  return (
    <div className={Styles.contanier}>
      <div className={Styles.design}>
        <div className={Styles.title}>
          <h1>My Bookings</h1>
        </div>
      </div>
      <div className={Styles.searchHospitals}>
        <select name="" id="">
          <option value="">Select Hospital</option>
          {hospitals.map((hospital, index) => {
            return <option key={index}>{hospital.name}</option>;
          })}
        </select>
        <button>Search</button>
      </div>

      <div className={Styles.bookedHospitals}>
        <div className={Styles.bookedHospitalsList}>
          {hospitals.map((hospital, index) => (
            <div className={Styles.cardContainer}>
              <div className={Styles.card} key={index}>
                <div className={Styles.details}>
                  <div className={Styles.image}>
                    <img src={logo} alt="Hospital Logo" />
                  </div>
                  <div className={Styles.information}>
                    <h2>{hospital.name}</h2>
                    <div
                      style={{
                        borderBottom: "1px dotted black",
                        paddingBottom: "10px",
                      }}
                    >
                      <h4>
                        {hospital.city}, {hospital.state}
                      </h4>
                      <p>{hospital.type}</p>
                      <p>
                        <span style={{ color: "#02A401", fontWeight: "700" }}>
                          FREE{" "}
                        </span>
                        <span style={{ textDecoration: "line-through" }}>
                          ₹500
                        </span>{" "}
                        Consultation fee at clinics
                      </p>
                    </div>
                    <span className={Styles.rating}>
                      <AiFillLike />
                      <p>{hospital.rating}</p>
                    </span>
                  </div>
                </div>
                <div className={Styles.rightColumn}>
                  {/* Here you can add any additional information or buttons */}
                  <p style={{ color: "#00A500", border: "1px solid #00A500" }}>
                    {hospital.date}
                  </p>
                  <p style={{ color: "#0c8ce6", border: "1px solid #0c8ce6" }}>
                    {hospital.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------------Side---Banner-------------------------------- */}
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
        {/* =================================================== */}
      </div>
    </div>
  );
};

export default BookingPanel;
