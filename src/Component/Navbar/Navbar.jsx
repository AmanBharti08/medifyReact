import logo from "../../Assets/MedifyLogo.png";
import Styles from "./Navbar.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={Styles.headline}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className={Styles.navbar}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className={Styles.container}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="Find Doctors" disabled />
              <Link
                value="two"
                to="/findhospitals"
                style={{ textDecoration: "none" }}
              >
                <Tab value="two" label="Hospitals" />
              </Link>
              <Tab value="three" label="Medicines" disabled />
              <Tab value="four" label="Surgeries" disabled />
              <Tab value="five" label="Software for Provider" disabled />
              <Tab value="six" label="Facilities" disabled />
            </Tabs>
          </Box>
          <Link to="/myBookings">
            <button className={Styles.bookingButton}>My Bookings</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
