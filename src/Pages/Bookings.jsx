import React from "react";

import Navbar from "../Component/Navbar/Navbar";
import BookingPanel from "../Component/Bookings/BookingPanel";
import Footer from "../Component/Footer/Footer";

const Bookings = () => {
  return (
    <div>
      <Navbar />
      <BookingPanel />
      <Footer/>
    </div>
  );
};

export default Bookings;
