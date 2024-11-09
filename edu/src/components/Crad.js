import React from 'react';
import './Card.css';

const CardSection = () => {
  const cards = [
    { id: 1, title: "Software Engineer", logo: "https://img.icons8.com/color/80/000000/code.png" },
    { id: 2, title: "Cyber Security", logo: "https://img.icons8.com/color/80/000000/security-checked.png" },
    { id: 3, title: "Development Tools", logo: "https://img.icons8.com/color/80/000000/developer.png" },
    { id: 4, title: "Mobile Apps", logo: "https://img.icons8.com/color/80/000000/android-os.png" },
    { id: 5, title: "Computer Science", logo: "https://img.icons8.com/color/80/000000/computer.png" },
    { id: 6, title: "Computer Science", logo: "https://img.icons8.com/color/80/000000/computer.png" },
    
  ];

  return (
    <div className='card-section'>
    <div className="card-section-container">
      <h2 className="section-title">Popular Category</h2>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-logo">
              <img src={card.logo} alt={`${card.title} logo`} />
            </div>
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="view-more-button">Browse Online Courses</button>
    </div>
    </div>
  );
};

export default CardSection;
