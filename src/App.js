import React from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Verfication from "./components/Verification";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import DeepFace from "./Pages/DeepFace";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LiveLoc from "./components/LiveLocation"
import VV from "./components/VideoVerification";

function App() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/deepface" element={<DeepFace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verfication" element={<Verfication />} />
          <Route path="/livelocation" element={<LiveLoc />} />
          {/* <Route path="/VV" element={<VV />} /> */}
          <Route
            path="/driver/video"
            element={<VV driverId="driver123" />}
          />
        </Routes>

        <Footer />
      </div>
    );
}

export default App;
