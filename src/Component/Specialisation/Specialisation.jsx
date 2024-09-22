import React from "react";
import Styles from "./Specialisation.module.css";

import { FaRegHospital } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";
import { PiHeartbeat } from "react-icons/pi";
import { IoIosPulse } from "react-icons/io";
import { LuTestTube2 } from "react-icons/lu";
import { GiHealingShield } from "react-icons/gi";
import { RiHospitalFill } from "react-icons/ri";
import { FaXRay } from "react-icons/fa6";

const Specialisation = () => {
  return (
    <div className={Styles.container}>
      <h2>Find By Specialisation</h2>
      <div className={Styles.grid}>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <FaRegHospital className={Styles.icon} />
          </div>
          <p>Doctors</p>
        </div>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <LuStethoscope className={Styles.icon} />
          </div>
          <p>Labs</p>
        </div>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <PiHeartbeat className={Styles.icon} />
          </div>
          <p>Hospitals</p>
        </div>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <IoIosPulse className={Styles.icon} />
          </div>
          <p>Medical Store</p>
        </div>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <LuTestTube2 className={Styles.icon} />
          </div>
          <p>Ambulance</p>
        </div>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <GiHealingShield className={Styles.icon} />
          </div>
          <p>Ambulance</p>
        </div>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <RiHospitalFill className={Styles.icon} />
          </div>
          <p>Ambulance</p>
        </div>
        <div className={Styles.gridItem}>
          <div className={Styles.iconBox}>
            <FaXRay className={Styles.icon} />
          </div>
          <p>Ambulance</p>
        </div>
      </div>
      <div className={Styles.buttonContainer}>
        <button>View All</button>
      </div>
    </div>
  );
};

export default Specialisation;
