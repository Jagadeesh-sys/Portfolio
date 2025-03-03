import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/logo (2).png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#home">
          <img src={logo} alt="Portfolio Logo" className="nav-logo" />
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a onClick={() => scrollToSection('home')} href="#home">Home</a></li>
        <li><a onClick={() => scrollToSection('about')} href="#about">About</a></li>
        <li><a onClick={() => scrollToSection('projects')} href="#projects">Projects</a></li>
        <li><a onClick={() => scrollToSection('contact')} href="#contact">Contact</a></li>
      </ul>
      <button className="nav-button">Get Free Consultant</button>
    </nav>
  );
};

export default Navbar;