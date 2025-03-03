import React from 'react';
import '../styles/home.css';
import profileImg from '../images/profile1.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-left">
          <span className="subtitle">GET EVERY SINGLE SOLUTIONS.</span>
          <h1 className="title">
            I'm Developer<br />
            <span className="name">Jagadeesh Koppisetti</span>
          </h1>
          <p className="description">
            Passionate full-stack developer with expertise in creating modern web applications.
            Specialized in React, Node.js, and responsive web design.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Learn More</button>
            <button className="btn-secondary">Hire Me</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Koppisetti Jagadeesh" />
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <h2>Developing With Passion While Exploring New Technologies.</h2>
        </div>
        <div className="feature">
          <h2>Any Type Of Query & Discussion.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;