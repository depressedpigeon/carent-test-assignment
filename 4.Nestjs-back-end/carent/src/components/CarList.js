import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import '../styles/stylesheet.css';
import { getCars } from '../services/cars.service';



const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars();
      setCars(data);
    };
    fetchCars();
  }, []);

  return (
    <div className="card-grid">
      {cars.map((car, index) => (
        <CarCard key={car.id}
          car={car}
          isActive={index === 5} />
        // map is to iterate through the cars array
        // index - key prop (required by React to list items)
        // index === 5 determines that the 6th card should be "active"
      ))}
    </div>
  );
};

export default CarList;