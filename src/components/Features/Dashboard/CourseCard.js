import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, image, duration, completion }) => (
  <div className="course-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{duration} mins</p>
    <div className="progress-bar">
      <div style={{ width: `${completion}%` }}></div>
    </div>
    <button>Continue</button>
  </div>
);

export default CourseCard;
