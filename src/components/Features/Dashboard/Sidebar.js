import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="profile-info">
      <img src="profile-pic-url" alt="Profile" className="profile-pic" />
      <h2>Md. Meharab H.</h2>
      <p>0.00</p>
    </div>
    <ul>
      <li>ড্যাশবোর্ড</li>
      <li>আমার কোর্সসমূহ</li>
      <li>সাবস্ক্রাইব করা কোর্সসমূহ</li>
      <li>প্রোফাইল</li>
      <li>পেমেন্ট সমূহ</li>
      <li>আমার সার্টিফিকেটসমূহ</li>
      <li>রেটিং এবং উপার্জন করুন</li>
      <li>সাইন আউট</li>
    </ul>
  </div>
);

export default Sidebar;
