import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardCards from './components/DashboardCards';
import CourseCard from './components/CourseCard';
import './Dashboard.css';

const App = () => (
  <div className="app">
    <Navbar />
    <div className="main-content">
      <Sidebar />
      <div className="dashboard-content">
        <DashboardCards />
        <h2>আপনি 1 কোর্স সম্পন্ন করেছেন!</h2>
        <div className="courses">
          <CourseCard title="IELTS Academic Preparation - Full Course" image="ielts-image-url" duration="442" completion="13" />
          <CourseCard title="Quran Shikkha" image="quran-image-url" duration="170" completion="18" />
          <CourseCard title="Photography" image="photography-image-url" duration="81" completion="100" />
        </div> 
      </div>
    </div>
  </div>
);

export default App;
