// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Slider from './components/Slider';
import Card from './components/Crad';
import CourseCard from './components/CourseCard';
import Eventlist from './components/Eventlist';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* Other components go here */}

      <Header />
      {/* Other components go here */}

      <Slider />
      {/* Other components go here */}

      <Card /> 
      {/* card components go here */}

      <CourseCard />
      {/* card components go here */}

      <Eventlist />
      {/* News and event components go here */}

      <Newsletter />
      {/* News update components go here */}

      <Footer />
      {/* footer components go here */}

    </div>
  );
}

export default Home;