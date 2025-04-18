import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookings from "./Pages/Bookings/Bookings";
import MedHomePage from "./Pages/HomePage/HomePage";
import MyBookings from "./Pages/MyBookings/MyBookings";


function App() {
  return (
    <div
    style={{
      fontFamily: "Poppins, sans-serif",
      margin: 0,
      padding: 0,
    }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<MedHomePage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
