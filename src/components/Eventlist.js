// EventList.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Eventlist.css';
import news from '../images/news.jpg';
import { Link } from 'react-router-dom';

const events = [
  { date: { day: '14', month: 'Sep' }, time: '11:00:09 AM', title: 'aa' },
  { date: { day: '01', month: 'Jun' }, time: '03:53:55 PM', title: 'xyz' },
  { date: { day: '01', month: 'Jun' }, time: '03:53:34 PM', title: 'zcsaf' },
  { date: { day: '01', month: 'Apr' }, time: '05:59:16 PM', title: 'dd' },
];

const featured = [
  { date: { full: 'Sep 14, 2024' }, type: 'JOB EVENT', title: 'aa', image: news },
  { date: { full: 'Jun 01, 2023' }, type: 'JOB EVENT', title: 'xyz', image: news },
];

const EventList = () => {
  return (
    <div className="app-container">
      <h1>News & Events</h1>
      <div className="content-container">
        
        {/* Event List Section */}
        <div className="event-list">
          {events.map((event, index) => (
            // page linkup
            <Link key={index} to="/events" className="event-item">
              <div className="event-date">
                <FontAwesomeIcon icon={faCalendar} />
                <div className="date-number">{event.date.day}</div>
                <div className="date-month">{event.date.month}</div>
              </div>

              <div className="event-info">
                <div className="time-info">
                  <FontAwesomeIcon icon={faClock} />
                  <span>{event.time}</span>
                </div>
                <p>{event.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Event Section */}
        <div className="featured-event">
          {featured.map((item, index) => (
            <div key={index} className="Featured">
              <div className="featured-item">
                <img src={item.image} alt="Event" className="featured-image" />
                <div className="news-overlay">
                  <FontAwesomeIcon icon={faBookmark} className="bookmark" />
                </div> 
              </div>
              <div className="featured-content">
                <FontAwesomeIcon icon={faBookmark} className="Ebookmark-icon" />
                <span className="event-date-vertical">{item.date.full}</span>
                <span className="event-type">{item.type}</span>
                {/* Wrap the title with Link to make only the title clickable */}
                  <Link to={`/preview`} className="featured-title-link">
                    <h4>{item.title}</h4>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
