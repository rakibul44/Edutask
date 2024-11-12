import React from 'react';
import './Header.css'; // Make sure to update styles in this file
import office from '../images/office.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <header className="header-container">
                <div className="header-left">
                    <h3 className="header-title">Why do we use it?</h3>
                    <p className="header-text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                    </p>
                    <Link to="/courses" className="view-more-button">Join Us</Link>
                </div>
                <div className="header-right">
                    <img src={office} alt="Descriptive Alt Text" className="header-image" /> {/* Corrected src */}
                    <span class="tooltiptext">Welcome to DeltaDev School</span>
                </div>
            </header>
        </div>
    );
};

export default Header;
