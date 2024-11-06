// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Slider from './components/Slider';
import Card from './components/Crad';

function App() {
  return (
    <div>
      <Navbar />
      {/* Other components go here */}

      <Header />
      {/* Other components go here */}

      <Slider />
      {/* Other components go here */}

      <Card />    
    </div>
  );
}

export default App;
