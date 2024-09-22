import React from "react";
import Hero from "../Component/Hero/Hero";
import Specialisation from "../Component/Specialisation/Specialisation";
import FrequentlyAskedQuestion from "../Component/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Footer from "../Component/Footer/Footer";

const Default = () => {
  return (
    <div>
      <Hero />
      <Specialisation />
      <FrequentlyAskedQuestion />
      <Footer/>
    </div>
  );
};

export default Default;
