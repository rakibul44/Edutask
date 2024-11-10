import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Deltadev from '../images/Deltadev.png';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Left side with Logo, Categories dropdown, and Search */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src={Deltadev} alt="Logo" className="logo-image" />
            </Link>
          </div>
          <div className="navbar-categories">
            <button className="dropdown-btn" onClick={toggleCategories}>Categories</button>
            {/* Only show dropdown content if categories are open */}
            {isCategoriesOpen && (
              <div className="dropdown-content">
                <Link to="/courses">Courses</Link>
                <Link to="/courses">Academics</Link>
                <Link to="/instructor">Instructor List</Link>
                <Link to="/courses">Photography</Link>
                <Link to="/courses">IT and Software</Link>
                <Link to="/courses">Cyber Security</Link>
              </div>
            )}
          </div>

          <div className="search-bar">
            <input type="text" className="search-input" placeholder="What do you want to learn?" />
            <button className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        {/* Right side with Courses, Events, Login, Logout */}
        <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/courses">Courses</Link>
          <Link to="/instructor">Instructor List</Link>
          <Link to="/events">Events</Link>
          <Link to="#">Sign-in</Link>
          <Link to="#">Sign-up</Link>
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
