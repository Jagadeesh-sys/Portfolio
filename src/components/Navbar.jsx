import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo (2).png';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConnectClick = () => {
    // Option 1: Scroll to contact form
    scrollToSection('contact');
    
    // Option 2: Open email client
    // window.location.href = 'mailto:your.email@example.com';
    
    // Option 3: Open modal with contact options
    // setIsModalOpen(true);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#home">
          <img src={logo} alt="Portfolio Logo" className="nav-logo" />
        </a>
      </div>

      <ul className="nav-links">
        <li><a onClick={() => scrollToSection('home')} href="#home">Home</a></li>
        <li><a onClick={() => scrollToSection('about')} href="#about">About</a></li>
        <li><a onClick={() => scrollToSection('projects')} href="#projects">Projects</a></li>
        <li><a onClick={() => scrollToSection('contact')} href="#contact">Contact</a></li>
      </ul>

      <button className="nav-button" onClick={handleConnectClick}>Connect Us</button>
    </nav>
  );
};

export default Navbar;