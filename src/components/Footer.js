// Footer.js
import React from 'react';
import './Footer.css';
import Deltadev from '../images/Deltadev.png'; // Adjust the path if your logo image is stored elsewhere
import { Link } from 'react-router-dom';

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
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/instructor">Instructor List</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Course</h3>
            <ul>
            <li><Link to="/courses">Popular Courses</Link></li>
            <li><Link to="/courses">Free Courses</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Instructor</h3>
            <ul>
            <li><Link to="/instructor">Instructor List</Link></li>
            <li><Link to="#">Sign up</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2019 DeltaDev - All Rights Reserved</p>
        <ul className="footer-bottom-links">
        <li><Link to="#">About Us</Link></li>
        <li><Link to="#">Privacy Policy</Link></li>
        <li><Link to="#">Terms & Conditions</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
