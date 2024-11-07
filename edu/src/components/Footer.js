// Footer.js
import React from 'react';
import './Footer.css';
import Deltadev from '../images/Deltadev.png'; // Adjust the path if your logo image is stored elsewhere

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Deltadev} alt="DeltaDev Logo" className="footer-logo-image" />
          <p>Road #10 ,  House #29<br />Nikunja-2, Dhaka-1229</p>
          <a href="mailto:demo@gmail.com">deltadevbd@gmail.com</a>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Events</h3>
            <ul>
              <li><a href="#">Event List</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Course</h3>
            <ul>
              <li><a href="#">Popular Course</a></li>
              <li><a href="#">Free Course</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Instructor</h3>
            <ul>
              <li><a href="#">Instructor List</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2019 DeltaDev - All Rights Reserved</p>
        <ul className="footer-bottom-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
