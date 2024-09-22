import "./App.css";
import Bookings from "./Pages/Bookings";
import Default from "./Pages/Default";
import FindHospitals from "./Pages/FindHospitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const config = {
  // endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
  // endpoint: `https://qkartfrontend-ask6.onrender.com/api/v1`,
  endpoint: `https://meddata-backend.onrender.com`,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/findhospitals" element={<FindHospitals />} />
        <Route path="/myBookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

export default App;
