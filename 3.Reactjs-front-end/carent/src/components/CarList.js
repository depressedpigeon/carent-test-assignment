import React from 'react';
import CarCard from './CarCard';
import '../styles/stylesheet.css';


const CarList = () => {
  const cars = Array(8).fill(0);

  return (
    <div className="card-grid">
      {cars.map((_, index) => (
        <CarCard key={index} isActive={index === 5} />
        // map is to iterate through the cars array
        // _ ignores the actual value, since we filled the array with mock data (zeros)
        // index - key prop (required by React to list items)
        // index === 5 determines that the 6th card should be "active"
      ))}
    </div>
  );
};

export default CarList;