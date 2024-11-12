import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Ghoori Learning</div>
    <input type="text" placeholder="আপনি কি শিখতে চান?" className="search-bar"/>
    <div className="user-profile">MD. MEHARAB H.</div>
  </nav>
);

export default Navbar;
