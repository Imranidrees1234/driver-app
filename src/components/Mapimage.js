import React from "react";
import "../components/Mapimage.css";
import mapimage from "../images/mapimage.png";

function Mapimage() {
  return (
    <div className="map-container">
      <h2>Our Location</h2>
      <div className="map-image-container">
        <img src={mapimage} alt="Map Location" className="map-image" />
      </div>
    </div>
  );
}

export default Mapimage;
