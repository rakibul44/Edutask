// LogoCarousel.js
import React, { useEffect, useState } from 'react';
import './Slider.css';

const logos = [
    { src: 'logo1.png', alt: 'Logo 1' },
    { src: 'logo2.png', alt: 'Logo 2' },
    { src: 'logo3.png', alt: 'Logo 3' },
    { src: 'logo4.png', alt: 'Logo 4' },
    { src: 'logo5.png', alt: 'Logo 5' },
    { src: 'logo6.png', alt: 'Logo 6' },
    { src: 'logo7.png', alt: 'Logo 7' },
    { src: 'logo8.png', alt: 'Logo 8' },
];

const LogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleLogos = 4; // Number of logos visible at a time

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
