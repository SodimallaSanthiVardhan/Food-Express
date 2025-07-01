import React from 'react';
import foodfavicon from '../../assets/logo2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={foodfavicon} alt="FoodApp" />
          <h2>FoodXpress</h2>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/#menu">Menu</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-twitter-fill"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-fill"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FoodXpress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
