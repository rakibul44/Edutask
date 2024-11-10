import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2>Choose the right program to build a successful career</h2>
        <p>
        To build a career, you need to put your time and effort in the right place. So we acquire job-ready confidence and skills right from the start.
        </p>
        <div className="banner-buttons">
          <Link to="/courses" className="primary-button">View all courses</Link>
          <button className="secondary-button">Call</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
