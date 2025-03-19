import React, { useState } from 'react';
import image6 from "../images/6.png";
import './CarBook.css';  // Import the CSS file

function CarBook() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: '',
    rentDuration: '',
    pickupDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="carbook-container">
      <img src={image6} alt="Car for Rent" className="carbook-image" />
      
      <div className="form-container">
        <h2>Rent a Car</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Car Model:</label>
            <input 
              type="text" 
              name="carModel" 
              value={formData.carModel} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Rent Duration (days):</label>
            <input 
              type="number" 
              name="rentDuration" 
              value={formData.rentDuration} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Pick-up Date:</label>
            <input 
              type="date" 
              name="pickupDate" 
              value={formData.pickupDate} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <button type="submit">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarBook;
