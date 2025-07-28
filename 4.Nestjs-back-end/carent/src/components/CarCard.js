import React from 'react';
import '../styles/stylesheet.css';

const CarCard = ({ car, isActive = false }) => {
  return (
    <div className={`card ${isActive ? 'card-active' : ''}`}>
      <h2 className="card-title">{car.model}</h2>
      <div className="price-box">
        <img src="assets/dollar.svg" alt="Dollar Sign" />
        <span className="span-price">{car.price}</span>
        <span className="span-day">/day</span>
      </div>
      <div className="card-img">
        <img
          src={`assets/${isActive ? 'car1.png' : 'car.png'}`}
          alt={car.model}
          onError={(e) => {
            e.target.src = 'assets/car.png'; // Fallback image
          }}
        />
      </div>
      <div className="card-details">
        {isActive ? (
          <button className="action-button">
            <span>Rent Now</span>
            <div className="arrow-img">
              <img src="assets/arrow.svg" alt="Rent now" />
            </div>
          </button>
        ) : (
          <>
            <div className="detail">
              <img src="assets/steeringWheel.svg" alt="Transmission" />
              {car.transmission}
            </div>
            <div className="detail">
              <img src="assets/seat.svg" alt="Seats" />
              {car.seats} Seats
            </div>
            <div className="detail">
              <img src="assets/fuel.svg" alt="Fuel Efficiency" />
              {car.mpg} MPG
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarCard;