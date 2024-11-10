import React from 'react';
import './Instructor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import p1 from '../images/p1.webp';
import p2 from '../images/p2.jpg';

// ProfileCard component to display individual profiles
const ProfileCard = ({ profile }) => {
  return (
    <div className="Icard">
      <button className="mail">
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
      <div className="profile-pic">
        <img src={profile.image} alt="Profile" />
      </div>
      <div className="bottom">
        <div className="Icontent">
          <span className="name">{profile.name}</span>
          <span className="about-me">{profile.about}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </div>
          <button className="button">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

// Parent component to display multiple ProfileCards
const ProfileList = () => { 
  const profiles = [
    {
      id: 1,
      name: 'Md. Mehrab Hossen',
      about: 'Full Stack Web Development, App Development, Project Research, Digital Marketing, Graphic Design',
      image: p1,
    },
    {
      id: 2,
      name: 'MD Akramul Hoque',
      about: 'Frontend Web Development, App Development, Graphic Design, UI/UX',
      image: p2,
    },
    {
      id: 3,
      name: 'Another Instructor',
      about: 'Backend Development, Database Management, Cloud Services',
      image: p2,
    },
    {
      id: 4,
      name: 'Instructor Example',
      about: 'Data Science, Machine Learning, AI Development',
      image: p2,
    },
    {
      id: 5,
      name: 'Instructor Sample',
      about: 'Cybersecurity, Ethical Hacking, Network Security',
      image: p2,
    },
    {
      id: 6,
      name: 'Sample Instructor',
      about: 'Mobile App Development, UI/UX, Graphic Design',
      image: p2,
    },
  ];

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
