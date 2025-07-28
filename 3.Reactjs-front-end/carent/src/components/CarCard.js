import React from 'react';
import '../styles/stylesheet.css';

const CarCard = ({ isActive = false }) => {
  return (
    <div className={`card ${isActive ? 'card-active' : ''}`}>
      <h2 className="card-title">Car Model</h2>
      <div className="price-box">
        <img src="assets/dollar.svg" alt="Dollar Sign" />
        <span className="span-price">42</span>
        <span className="span-day">/day</span>
      </div>
      <div className="card-img">
        <img src={isActive ? "assets/car1.png" : "assets/car.png"} alt="Car" />
      </div>
      <div className="card-details">
        {isActive ? (
          <button className="action-button">
            <span></span>
            <span>Rent Now</span>
            <div className="arrow-img">
              <img src="assets/arrow.svg" alt="" />
            </div>
          </button>
        ) : (
          <>
            <div className="detail">
              <img src="assets/steeringWheel.svg" alt="Manual Icon" /> Manual
            </div>
            <div className="detail">
              <img src="assets/seat.svg" alt="Seats Icon" /> 5 Seats
            </div>
            <div className="detail">
              <img src="assets/fuel.svg" alt="Fuel Icon" /> 24 MPG
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarCard;