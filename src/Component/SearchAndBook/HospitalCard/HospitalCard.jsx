import React, { useState, useEffect } from "react";
import Styles from "./HospitalCard.module.css";
import logo from "../../../Assets/hospitalLogo.png";
import { AiFillLike } from "react-icons/ai";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const getDayLabels = () => {
  const days = ["Today", "Tomorrow"];
  const today = new Date();

  for (let i = 2; i < 7; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    days.push(
      day.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    ); // MM/DD/YYYY format
  }

  return days;
};

const morningSlots = ["10:30 A.M", "11:00 A.M", "11:30 A.M"];
const afternoonSlots = ["12:00 P.M", "12:30 P.M", "1:00 P.M", "1:30 P.M"];
const eveningSlots = ["5:30 P.M", "6:00 P.M", "6:30 P.M"];
const totalSlotsPerDay =
  morningSlots.length + afternoonSlots.length + eveningSlots.length;

const HospitalCard = ({ city, state, name, rating, type }) => {
  const [openSchedule, setOpenSchedule] = useState(false);
  const dayLabels = getDayLabels();
  const [value, setValue] = useState("0");
  const [bookedSlots, setBookedSlots] = useState({});

  useEffect(() => {
    const savedSlots = localStorage.getItem(`bookedSlots-${name}`);
    if (savedSlots) {
      setBookedSlots(JSON.parse(savedSlots));
    }
  }, [name]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSlotClick = (dayIndex, slot) => {
    const updatedSlots = { ...bookedSlots };
    if (!updatedSlots[dayIndex]) {
      updatedSlots[dayIndex] = [];
    }
    updatedSlots[dayIndex] = [...updatedSlots[dayIndex], slot];
    setBookedSlots(updatedSlots);

    // Save to localStorage with hospital-specific key
    const booking = {
      hospital: name,
      city: city,
      state: state,
      rating: rating,
      type: type,
      date: dayLabels[dayIndex],
      time: slot,
    };
    localStorage.setItem(
      `booking-${name}-${dayIndex}-${slot}`,
      JSON.stringify(booking)
    );
    localStorage.setItem(`bookedSlots-${name}`, JSON.stringify(updatedSlots));
  };

  const isSlotBooked = (dayIndex, slot) => {
    return bookedSlots[dayIndex]?.includes(slot);
  };

  const getAvailableSlots = (dayIndex) => {
    return totalSlotsPerDay - (bookedSlots[dayIndex]?.length || 0);
  };

  const handleClick = () => {
    setOpenSchedule(!openSchedule);
  };

  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.card}>
        <div className={Styles.details}>
          <div className={Styles.image}>
            <img src={logo} alt="Hospital Logo" />
          </div>
          <div className={Styles.information}>
            <h2>{name}</h2>
            <div
              style={{
                borderBottom: "1px dotted black",
                paddingBottom: "10px",
              }}
            >
              <h4>
                {city}, {state}
              </h4>
              <p>{type}</p>
              <p>
                <span style={{ color: "#02A401", fontWeight: "700" }}>
                  FREE{" "}
                </span>
                <span style={{ textDecoration: "line-through" }}>₹500</span>{" "}
                Consultation fee at clinics
              </p>
            </div>
            <span className={Styles.rating}>
              <AiFillLike />
              <p>{rating}</p>
            </span>
          </div>
        </div>
        <div className={Styles.rightColumn}>
          <p>Available Today</p>
          <button onClick={handleClick}>Book FREE Center Visit</button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------- */}
      {openSchedule && (
        <div className={Styles.schedule}>
          <TabContext value={value}>
            <Box sx={{ bgcolor: "background.paper" }}>
              <TabList
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{ maxWidth: "700px", overflowX: "auto" }}
                TabScrollButtonProps={{
                  sx: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: "white",
                    color: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&.Mui-disabled": { opacity: 0.3 },
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow
                  },
                }}
              >
                {dayLabels.map((label, dayIndex) => (
                  <Tab
                    key={dayIndex}
                    label={
                      <div style={{ textAlign: "center" }}>
                        <span>{label}</span>
                        <br />
                        <span style={{ fontSize: "12px", color: "green" }}>
                          {getAvailableSlots(dayIndex)} slots available
                        </span>
                      </div>
                    }
                    value={dayIndex.toString()}
                  />
                ))}
              </TabList>

              {dayLabels.map((label, dayIndex) => (
                <TabPanel key={dayIndex} value={dayIndex.toString()}>
                  {/* Morning Slots */}
                  <div className={Styles.timeslots}>
                    <h3>Morning:</h3>
                    {morningSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlotClick(dayIndex, slot)}
                        disabled={isSlotBooked(dayIndex, slot)}
                      >
                        {isSlotBooked(dayIndex, slot) ? "Booked" : slot}
                      </button>
                    ))}
                  </div>

                  {/* Afternoon Slots */}
                  <div className={Styles.timeslots}>
                    <h3>Afternoon:</h3>
                    {afternoonSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlotClick(dayIndex, slot)}
                        disabled={isSlotBooked(dayIndex, slot)}
                      >
                        {isSlotBooked(dayIndex, slot) ? "Booked" : slot}
                      </button>
                    ))}
                  </div>

                  {/* Evening Slots */}
                  <div className={Styles.timeslots}>
                    <h3>Evening:</h3>
                    {eveningSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlotClick(dayIndex, slot)}
                        disabled={isSlotBooked(dayIndex, slot)}
                      >
                        {isSlotBooked(dayIndex, slot) ? "Booked" : slot}
                      </button>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </Box>
          </TabContext>
        </div>
      )}
    </div>
  );
};

export default HospitalCard;
