// CarServices.js
import React, { useState, useEffect } from 'react';
import { carServices } from './db'; // Ensure db.js is correctly imported

const CarServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(carServices);
  }, []);

  return (
    <div className="car-services-container">
      <h2 className="services-heading">Rent A Car Services</h2>
      <div className="row car-cards" style={{ width: '100%'}}>
        {services.map((car) => (
          <div key={car.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card" style={{ width: '100%' , height: '400px'}}>
              <img style={{ width: '100%' , height: '200px'}}
                src={car.image}
                className="card-img-top fixed-image"
                alt={car.title}
              />
              <div className="card-body">
                <h2 className="card-title">{car.title}</h2>
                <h6 className='card-description'>{car.description}</h6>
                <h3 className="card-text">{car.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarServices;
