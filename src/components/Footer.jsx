import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            This is the portfolio website of a Front-end web developer named
            Shahbaz Singh Mann that has a good hold over the front-end web
            developing and designing languages.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Baazmann. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
