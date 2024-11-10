import React from 'react';
import './CourseCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import office from '../../images/office.jpg';

// FOR HTTP REQUEST
const courseData = [
  {
    id: 1,
    image: office,
    subtitle: "gh",
    title: "Demo Course",
    price: "$100.00",
    lessons: "1 Lesson",
    sections: "1 Section",
  },
  {
    id: 2,
    image: office,
    subtitle: "Android Development",
    title: "Demo Live Class",
    price: "$0.00",
    lessons: "5 Lessons",
    sections: "5 Sections",
  },
  {
    id: 3,
    image: office,
    subtitle: "Computer Science",
    title: "Sed dignissim quam sit amet velit egestas",
    price: "$666.00",
    lessons: "10 Lessons",
    sections: "5 Sections",
  },
  {
    id: 4,
    image: office,
    subtitle: "Virtualization & Computing",
    title: "Aliquam vel arcu eu lorem sollicitudin",
    price: "$667.00",
    lessons: "10 Lessons",
    sections: "5 Sections",
  },
  {
    id: 5,
    image: office,
    subtitle: "Virtualization & Computing",
    title: "Aliquam vel arcu eu lorem sollicitudin",
    price: "$667.00",
    lessons: "10 Lessons",
    sections: "5 Sections",
  },
  {
    id: 6,
    image: office,
    subtitle: "Virtualization & Computing",
    title: "Aliquam vel arcu eu lorem sollicitudin",
    price: "$667.00",
    lessons: "10 Lessons",
    sections: "5 Sections",
  },
  {
    id: 7,
    image: office,
    subtitle: "Virtualization & Computing",
    title: "Aliquam vel arcu eu lorem sollicitudin",
    price: "$667.00",
    lessons: "10 Lessons",
    sections: "5 Sections",
  },
  {
    id: 8,
    image: office,
    subtitle: "Virtualization & Computing",
    title: "Aliquam vel arcu eu lorem sollicitudin",
    price: "$667.00",
    lessons: "10 Lessons",
    sections: "5 Sections",
  },
];

const CourseCard = ({ course }) => (
  <div className="course-card"> 
    {/* Image container with overlay */}
    <div className="image-container">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="image-overlay">
        <FontAwesomeIcon icon={faEye} className="eye-icon" />
        <Link to="/courses">Courses</Link>
      </div>
    </div>
    
    <div className="ribbon">
      <span className="ribbon-icon">
        <FontAwesomeIcon icon={faBookmark} />
      </span>
    </div>
    
    <div className="course-content">
      <p className="course-subtitle">{course.subtitle}</p>
      <h3 className="course-title">{course.title}</h3>

      <div className="course-footer">
        <div className="course-rating">
          <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="course-price">{course.price}</div>
      </div>

      <div className="course-info">
        <span className="course-lessons">📄 {course.lessons}</span>
        <span className="course-sections">👥 {course.sections}</span>
      </div>
    </div>
  </div>
);


function CourseCardContainer() {

  return (
    <div className="course-card-container">
    <h2 className="section-title">Our Popular <span className="highlight">Courses</span></h2>
    <div className="cards-wrapper">
      {courseData.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
  )
}

export default CourseCardContainer;
