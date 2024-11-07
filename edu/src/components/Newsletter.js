// Newsletter.js
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Get updates & exclusive offers</h2>
      <p>Signup to our newsletter to be the first to hear about new openings, offers.</p>
      <div className="newsletter-input">
        <input type="email" placeholder="Enter email here..." />
        <button type="button">Subscribe</button>
      </div>
      <div className="newsletter-checkbox">
        <input type="checkbox" id="subscribe" />
        <label htmlFor="subscribe">By subscribing to our newsletter you agree to receive emails from us.</label>
      </div>
    </div>
  );
};

export default Newsletter;
