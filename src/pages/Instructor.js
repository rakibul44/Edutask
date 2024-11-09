// Instructor.js
import React from 'react';
import './Instructor.css';

const instructors = [
  { id: 1, name: "Henry", title: "Engineer", email: "henry@email.com", imgSrc: "path-to-image" },
  { id: 2, name: "Prem Sagar Verma", title: "Lecturer", imgSrc: "path-to-image" },
  { id: 3, name: "Lorence", title: "Lecturer", imgSrc: "path-to-image" },
  { id: 4, name: "Roland", title: "Teacher", imgSrc: "path-to-image" },
  { id: 5, name: "Harry", title: "Business analyzer", imgSrc: "path-to-image" },
  { id: 6, name: "Isabella", title: "Lecturer", imgSrc: "path-to-image" },
  { id: 7, name: "Jonny", title: "Teacher", imgSrc: "path-to-image" },
];

const Instructor = () => {
  return (
    <div className="instructor-section">
      <div className="instructor-container">
        {instructors.map((instructor) => (
          <div className="instructor-card" key={instructor.id}>
            <div className="card-avatar">
              <img src={instructor.imgSrc} alt={instructor.name} />
            </div>
            <h3>{instructor.name}</h3>
            <p>{instructor.title}</p>
            {instructor.email && <p className="email">{instructor.email}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
