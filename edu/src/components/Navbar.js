// Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Deltadev from '../images/Deltadev.png'; // Adjust path to your logo image

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Left side with Logo, Categories dropdown, and Search */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={Deltadev} alt="Logo" className="logo-image" /> {/* Replace text logo with image */}
          </div>
          <div className="navbar-categories">
            <button className="dropdown-btn">Categories</button>
            {/* Dropdown options */}
            <div className="dropdown-content">
              <a href="#">Category 1</a>
              <a href="#">Category 2</a>
              <a href="#">Category 3</a>
            </div>
          </div>

          <div className="search-bar">
            <input type="text" className="search-input" placeholder="What do you want to learn?" />
            <button className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        {/* Right side with Courses, Events, Login, Logout */}
        <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#">Courses</a>
          <a href="#">Instructor List</a>
          <a href="#">Events</a>
          <a href="#">Sign-in</a>
          <a href="#">Sign-up</a>
        </div>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
