import React from 'react';
import '../styles/stylesheet.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-description">
          <p className="footer-text">
            The service does not provide commercial services. All services
            provided by the service are purely informational in nature.
          </p>
          <button className="footer-button">
            <span>Rent Now</span>
          </button>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4 className="footer-heading">Info</h4>
            <ul className="footer-list">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Leasing Rules</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contacts</h4>
            <ul className="footer-list">
              <li><a href="#">hello@carent.com</a></li>
              <li><a href="#">1001 Street, City, Country</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2025 — Copyright</p>
        <div className="social-links">
          <a href="#"><img src="assets/Facebook.svg" alt="" /></a>
          <a href="#"><img src="assets/Instagram.svg" alt="" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;