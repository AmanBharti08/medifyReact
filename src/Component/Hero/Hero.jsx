import Navbar from "../Navbar/Navbar";
import Styles from "./Hero.module.css";
import doctorImage from "../../Assets/doctor.png";
import LookingFor from "./LookingFor/LookingFor";
import ScrollOffers from "./ScrollOffers/ScrollOffers";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className={Styles.hero}>
        <Navbar />
        <div className={Styles.heroBanner}>
          <div className={Styles.tagLine}>
            <p style={{ margin: "0", fontWeight: "500" }}>
              Skip The Travel! Find Online
            </p>
            <h1 style={{ margin: "0" }}>
              Medical <span style={{ color: "#2aa7ff" }}>Centers</span>
            </h1>
            <p
              style={{
                fontWeight: "400",
                margin: "0",
                fontSize: "24px",
                opacity: "0.7",
              }}
            >
              Connect Instantly with a 24/7 specialist or choose to video visit
              a particular doctor.
            </p>
            <Link to="/findhospitals">
              <button className={Styles.button}>Find Centers</button>
            </Link>
          </div>
          <div className="imageDoctor">
            <img src={doctorImage} alt="" />
          </div>
        </div>
      </div>
      <LookingFor />

      <ScrollOffers />
    </div>
  );
};

export default Hero;
