import React from 'react';
import '../styles/HeroSection.css';
// import video2 from '../assets/video/vecteezy_3d-laptop-and-program-code-development-web-coding-concept_27526403.mp4'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>Welcome to  <span className='fw-bold'>Solution Path</span></h1>
        <p>Our expertise spans across various tech domains, including software development, web design, and data-driven applications, ensuring that our clients stay ahead in a competitive market.</p>
      </div>
    </div>
  );
};

export default HeroSection;
