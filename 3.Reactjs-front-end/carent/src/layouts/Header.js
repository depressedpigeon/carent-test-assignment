import React from 'react';
import '../styles/stylesheet.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CARENT</div>
      <nav className="main-nav">
        <a href="#">Home</a>
        <a href="#" className="active">Car Catalogue</a>
        <a href="#">Contact Us</a>
        <a href="#">Help</a>
      </nav>
      <div className="auth-links">
        <a href="#">Register</a>
        <a href="#">Sign In</a>
      </div>
    </header>
  );
};

export default Header;