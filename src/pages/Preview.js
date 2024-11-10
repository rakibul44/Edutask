import React from 'react';
import { Accordion } from 'react-bootstrap';

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
    {
      title: 'Introduction to HTML',
      lectures: [],
      totalLectures: '8 lectures • 49min'
    },
    {
      title: 'Intermediate HTML',
      lectures: [],
      totalLectures: '7 lectures • 52min'
    },
    {
      title: 'Multi-Page Websites',
      lectures: [],
      totalLectures: '7 lectures • 1hr 10min'
    },
    {
      title: 'Introduction to CSS',
      lectures: [],
      totalLectures: '6 lectures • 59min'
    },
    {
      title: 'CSS Properties',
      lectures: [],
      totalLectures: '5 lectures • 1hr 9min'
    },
    {
      title: 'Intermediate CSS',
      lectures: [],
      totalLectures: '5 lectures • 1hr 33min'
    }
  ];

  return (
    <div className="container my-4">
      <h2>Course Content</h2>
      <p>44 sections • 373 lectures • 61h 44m total length</p>
      <Accordion defaultActiveKey="0">
        {sections.map((section, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              <div className="d-flex justify-content-between w-100">
                <span>{section.title}</span>
                <span>{section.totalLectures}</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {section.lectures.length > 0 ? (
                <ul className="list-unstyled">
                  {section.lectures.map((lecture, lectureIndex) => (
                    <li key={lectureIndex} className="d-flex justify-content-between align-items-center">
                      <div>
                        <span>{lecture.title}</span>
                        {lecture.preview && <span className="ml-2 badge bg-primary">Preview</span>}
                      </div>
                      <span>{lecture.duration}</span>
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
  );
};

export default Preview;
