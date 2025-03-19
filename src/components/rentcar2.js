import React from 'react';
import './rentcar.css'; // Optional: Add a separate CSS file for styling
import image5 from "C:/Users/DELL/Desktop/FYP Project/location/myapp/src/images/5.png";

const rentcar = () => {
  return (
    <div className="rent-car-container">
      <div className="rent-car-content">
        
        <div className="rent-car-text">
          <h2>Rent A Car Service</h2>
          <p>
            Looking for a reliable car rental service? We offer a wide variety of vehicles for your
            travel needs, whether it's for business, leisure, or special occasions. Our cars are well
            maintained, fuel-efficient, and available for short or long-term rentals.
          </p>
          <ul>
            <li>Affordable Prices</li>
            <li>Flexible Rental Periods</li>
            <li>Easy Booking Process</li>
            <li>Well-Maintained Cars</li>
          </ul>
          <button className="btn-rent-now">Rent Now</button>
        </div>
        <div className="rent-car-image">
          <img src={image5} alt="Car" className="car-image" /> {/* Replace with your car image */}
        </div>
      </div>
    </div>
  );
};

export default rentcar;
