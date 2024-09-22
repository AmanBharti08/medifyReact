import Styles from "./LookingFor.module.css";
import { FaUserDoctor } from "react-icons/fa6";
import { RiBuilding4Line } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { GiMedicines } from "react-icons/gi";
import { LiaAmbulanceSolid } from "react-icons/lia";

import { Link } from "react-router-dom";

const LookingFor = () => {
  return (
    <div className={Styles.contanier}>
      <div className={Styles.search}>
        <input type="text" placeholder="State" disabled />
        <input type="text" placeholder="City" disabled />
        <button disabled>Search</button>
      </div>
      <div className={Styles.loookingForOptions}>
        <h2 style={{ fontWeight: "500" }}>You May Be Looking For</h2>
        <div className={Styles.grid}>
          <div className={Styles.gridItem}>
            <div className={Styles.iconBox}>
              <FaUserDoctor className={Styles.icon} />
            </div>
            <p>Doctors</p>
          </div>
          <div className={Styles.gridItem}>
            <div className={Styles.iconBox}>
              <RiBuilding4Line className={Styles.icon} />
            </div>
            <p>Labs</p>
          </div>
          <Link
            to="/findhospitals"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className={Styles.gridItem}
              style={{ cursor: "pointer", border: "1px solid #2aa7ff" }}
            >
              <div className={Styles.iconBox}>
                <BsBuildings className={Styles.icon} />
              </div>
              <p>Hospitals</p>
            </div>
          </Link>
          <div className={Styles.gridItem}>
            <div className={Styles.iconBox}>
              <GiMedicines className={Styles.icon} />
            </div>
            <p>Medical Store</p>
          </div>
          <div className={Styles.gridItem}>
            <div className={Styles.iconBox}>
              <LiaAmbulanceSolid className={Styles.icon} />
            </div>
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
