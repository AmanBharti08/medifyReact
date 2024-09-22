import React from "react";
import Styles from "./FrequentlyAskedQuestion.module.css";

import photo from "../../Assets/questionPhoto.png";
import heartHand from "../../Assets/hearthand.png";

import { FaPlus } from "react-icons/fa6";

const FrequentlyAskedQuestion = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.headings}>
        <h5>Get Your Answer</h5>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={Styles.questionContainer}>
        <div className={Styles.image}>
          <img src={photo} alt="" />
        </div>
        <div className={Styles.heartCircle}>
          <img src={heartHand} alt="" />
        </div>
        <div className={Styles.question}>
          <div className={Styles.questions}>
            <h5>Why choose our medical for your family?</h5>
            <FaPlus style={{ color: "#2AA7FF" }} />
          </div>
          <div className={Styles.questions}>
            <h5>Why we are different from others?</h5>
            <FaPlus style={{ color: "#2AA7FF" }} />
          </div>
          <div className={Styles.questions}>
            <h5>Trusted & experience senior care & love</h5>
            <FaPlus style={{ color: "#2AA7FF" }} />
          </div>
          <div className={Styles.questions}>
            <h5>How to get appointment for emergency cases?</h5>
            <FaPlus style={{ color: "#2AA7FF" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
