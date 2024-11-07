// LogoCarousel.js
import React, { useEffect, useState } from 'react';
import './Slider.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';
import logo7 from '../images/logo7.png';
import logo8 from '../images/logo8.png';
import logo9 from '../images/logo9.png';
import logo10 from '../images/logo10.png';
import logo11 from '../images/logo11.png';
import logo12  from '../images/logo12.png';
import logo13 from '../images/logo13.png';

const logos = [
    { src: logo1, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
    { src: logo6, alt: 'Logo 6' },
    { src: logo7, alt: 'Logo 7' },
    { src: logo8, alt: 'Logo 8' },
    { src: logo9, alt: 'Logo 9' },
    { src: logo10, alt: 'Logo 10' },
    { src: logo11, alt: 'Logo 11' },
    { src: logo12, alt: 'Logo 12' },
    { src: logo13, alt: 'Logo 13' },
];

const LogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleLogos = 6; // Showing logos at a time

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + visibleLogos) % logos.length);
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${(currentIndex / visibleLogos) * 100}%)` }}
            >
                {logos.map((logo, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={logo.src} alt={logo.alt} className="carousel-logo" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
