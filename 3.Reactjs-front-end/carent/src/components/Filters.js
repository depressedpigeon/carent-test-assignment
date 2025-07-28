import React from 'react';
import '../styles/stylesheet.css';

const Filters = () => {
  return (
    <div className="filters">
      <div className="filter">
        Price <img src="assets/arrow-down.svg" alt="Arrow Icon" />
      </div>
      <div className="filter">
        Manufacture <span className="count">5</span>
        <img src="assets/arrow-down.svg" alt="Arrow Icon" />
      </div>
      <div className="filter">
        Type <span className="count">2</span>
        <img src="assets/arrow-down.svg" alt="Arrow Icon" />
      </div>
      <div className="filter">
        Rating <img src="assets/arrow-down.svg" alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default Filters;