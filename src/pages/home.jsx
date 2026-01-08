import React from 'react';
import '../styles/home.css';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaMeteor } from 'react-icons/fa';
import resumePDF from '../images/JagadeeshResume.pdf';
import myPhoto from '../images/myphoto1.png';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'JagadeeshResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="greeting">Hi, I am</h2>
          <h3 className="role-title">Koppisetti</h3>
          <div className="name-wrapper">
            <FaMeteor className="meteor-icon" />
            <h1 className="main-name bouncing-name">
              {"JAGADEESH".split("").map((char, index) => (
                <span key={index} className="bouncing-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <h3 className="role-title">Full Stack Developer</h3>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/jagadeesh-koppisetti-173701261/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Jagadeesh-sys" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/jagadeesh_koppisetti/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/jagadeesh.koppisetti.50/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>

          <div className="cta-buttons">
            <button className="btn-primary" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={myPhoto} alt="Jagadeesh Koppisetti" className="profile-photo" />
        </div>
      </div>
    </div>
  );
};

export default Home;