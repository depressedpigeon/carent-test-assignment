import React from 'react';
import Filters from '../components/Filters';
import CarList from '../components/CarList';
import '../styles/stylesheet.css';

const HomePage = () => {
  return (
    <>
      <section className="search-section">
        <div className="search-bar">
          <div className="location">
            <img src="assets/location.svg" alt="Location Icon" />
            <span>New Zealand</span>
          </div>
          <div className="date-range">
            <div className="date">
              <img src="assets/calendar.svg" alt="Calendar Icon" />
              <span>27/11/2020</span>
            </div>
            <div className="date">
              <img src="assets/calendar.svg" alt="Calendar Icon" />
              <span>30/11/2020</span>
            </div>
          </div>
          <div className="search-icon">
            <img src="assets/search.png" alt="Search Icon" />
          </div>
        </div>
      </section>

      <section className="catalogue-section">
        <div className="catalogue-header">
          <div className="catalogue-text">
            <h1>Car Catalogue</h1>
            <p>Explore the cars you might like!</p>
          </div>
          <Filters />
        </div>
        <CarList />
      </section>
    </>
  );
};

export default HomePage;