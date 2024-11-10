import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';
import './Events.css';
import news from '../images/news.jpg';

const events = [
  { date: 'Sep 14, 2024', type: 'JOB EVENT', title: 'aa', image: news },
  { date: 'Jun 01, 2023', type: 'HIGHER STUDY', title: 'xyz', image: news },
  { date: 'Jun 01, 2023', type: 'JOB EVENT', title: 'zcsaf', image: news },
  { date: 'Jun 01, 2023', type: 'JOB EVENT', title: 'zcsaf', image: news },
  { date: 'Jun 01, 2023', type: 'JOB EVENT', title: 'zcsaf', image: news },
];

const Events = () => {
  return (
    <div className="event-container">
      <h1>News & Events</h1>
      <div className="event-cards">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <div className="overlay-icon">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            <div className="event-info">
              <span className="event-date">{event.date}</span>
              <span className="event-type">{event.type}</span>
              <h4 className="event-title">{event.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
