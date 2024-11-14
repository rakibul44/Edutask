import React, { useState } from 'react';
import { Accordion, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Preview.css';

const accordionData = [
  {
    title: 'Front-End Web Development',
    totalLectures: '9 lectures • 37min',
    lectures: [
      { title: "What You'll Get in This Course", duration: '03:08', preview: true },
      { title: 'Download the Course Syllabus', duration: '00:12', preview: true },
      { title: 'Download the 12 Rules to Learn to Code eBook [Latest Edition]', duration: '00:42', preview: true },
      { title: 'Download the Required Software', duration: '00:43', preview: true },
      { title: 'How Does the Internet Actually Work?', duration: '05:27', preview: true },
      { title: 'How Do Websites Actually Work?', duration: '08:22', preview: true },
      { title: 'How to Get the Most Out of the Course', duration: '09:33', preview: true },
      { title: "How to Get Help When You're Stuck", duration: '06:39', preview: true },
      { title: 'Pathfinder', duration: '02:23', preview: true },
    ],
  },
  {
    title: 'Front-End Web Development',
    totalLectures: '9 lectures • 37min',
    lectures: [
      { title: "What You'll Get in This Course", duration: '03:08', preview: true },
      { title: 'Download the Course Syllabus', duration: '00:12', preview: true },
      { title: 'Download the 12 Rules to Learn to Code eBook [Latest Edition]', duration: '00:42', preview: true },
      { title: 'Download the Required Software', duration: '00:43', preview: true },
      { title: 'How Does the Internet Actually Work?', duration: '05:27', preview: true },
      { title: 'How Do Websites Actually Work?', duration: '08:22', preview: true },
      { title: 'How to Get the Most Out of the Course', duration: '09:33', preview: true },
      { title: "How to Get Help When You're Stuck", duration: '06:39', preview: true },
      { title: 'Pathfinder', duration: '02:23', preview: true },
    ],
  },
  // Add more sections if needed
];

const PreviewPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const handleShowModal = (lecture) => {
    setSelectedLecture(lecture);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLecture(null);
  };

  return (
    <div className="preview-page">
      <header className="preview-header">
        <div className="pheader-left">
          <h1 className="pheader-title">The Web Developer Bootcamp 2024</h1>
          <p className="pheader-text">10 Hours of React just added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!</p>
          <Link to="/courses" className="header-button">Enroll Now</Link>
        </div>
        
        <div className="pheader-right">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video link
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </header>

      <Accordion defaultActiveKey="0" className="preview-accordion">
        {accordionData.map((section, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              {section.title} - {section.totalLectures}
            </Accordion.Header>
            <Accordion.Body>
              <p>{section.totalLectures}</p>
              {section.lectures.length > 0 ? (
                <ul className="list-unstyled">
                  {section.lectures.map((lecture, lectureIndex) => (
                    <li key={lectureIndex} className="lecture-item">
                      <div className="lecture-title">
                        <span>{lecture.title}</span>
                        {lecture.preview && (
                          <Button
                            variant="link"
                            className="preview-button"
                            onClick={() => handleShowModal(lecture)}
                          >
                            Preview
                          </Button>
                        )}
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

      {/* Modal for Lecture Preview */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLecture?.title}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with dynamic video URL if available
            title="Lecture Preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            View More
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PreviewPage;
