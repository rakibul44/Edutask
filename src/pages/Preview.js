import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import './Preview.css';

const Preview = () => {
  const sections = [
    {
      title: 'Front-End Web Development',
      lectures: [
        { title: "What You'll Get in This Course", duration: '03:08', preview: true },
        { title: 'Download the Course Syllabus', duration: '00:12', preview: true },
        { title: 'Download the 12 Rules to Learn to Code eBook [Latest Edition]', duration: '00:42' },
        { title: 'Download the Required Software', duration: '00:43' },
        { title: 'How Does the Internet Actually Work?', duration: '05:27', preview: true },
        { title: 'How Do Websites Actually Work?', duration: '08:22', preview: true },
        { title: 'How to Get the Most Out of the Course', duration: '09:33' },
        { title: "How to Get Help When You're Stuck", duration: '06:39' },
        { title: 'Pathfinder', duration: '02:23' },
      ],
      totalLectures: '9 lectures • 37min'
    },
    // Add other sections as needed
  ];

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner my-4 p-4">
        <div className="row">
          {/* Left Side - Title, Text, and Button */}
          <div className="col-md-6">
            <h2>The Web Developer Bootcamp 2024</h2>
            <p>Become a developer with one comprehensive course covering HTML, CSS, JavaScript, React, Node, MongoDB, and more!</p>
            <Button variant="primary">Enroll Now</Button>
          </div>

          {/* Right Side - Embedded YouTube Video */}
          <div className="col-md-6">
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your_video_id" // Replace 'your_video_id' with the actual video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="preview-container">
        <Accordion defaultActiveKey="0" className="accordion-section">
          {sections.map((section, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{section.title}</Accordion.Header>
              <Accordion.Body>
                <p>{section.totalLectures}</p>
                {section.lectures.length > 0 ? (
                  <ul className="list-unstyled">
                    {section.lectures.map((lecture, lectureIndex) => (
                      <li key={lectureIndex} className="lecture-item">
                        <div className="lecture-title">
                          <span>{lecture.title}</span>
                          {lecture.preview && <span className="badge preview-badge">Preview</span>}
                        </div>
                        <span className="lecture-duration">{lecture.duration}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">No lectures available</p>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Preview;
