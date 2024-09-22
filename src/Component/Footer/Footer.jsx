import React from "react";
import Styles from "./Footer.module.css";

import logo from "../../Assets/MedifyLogo.png";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.aboveSection}>
        <div className={Styles.leftSection}>
          <div className={Styles.logo}>
            <img src={logo} alt="Medify Logo" />
          </div>
          <div className={Styles.links}>
            <div>
              <FaFacebook />
            </div>
            <div>
              <AiFillTwitterCircle />
            </div>
            <div>
              <IoLogoYoutube />
            </div>
            <div>
              <FaPinterest />
            </div>
          </div>
        </div>
        <div className={Styles.rightSection}>
          <ul>
            <li>About us</li>
            <li>Our Pricing</li>
            <li>Our Gallery</li>
            <li>Appointment</li>
            <li>Privacy Policy</li>
            <li>Orthology</li>
            <li>Neurology</li>
            <li>Dental Care</li>
            <li>Opthalmology</li>
            <li>Cardiology</li>
          </ul>
        </div>
      </div>
      <div className={Styles.copyrightSection}>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
