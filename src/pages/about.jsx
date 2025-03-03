import React from 'react';
import '../styles/about.css';
import profileImage from '../images/about.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiMysql } from 'react-icons/si';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">Get to know me better</p>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <img 
            src={profileImage} 
            alt="Professional headshot"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <h2>Aspiring Software Developer</h2>
          <p>
            As a recent graduate with a strong foundation in software development, I am actively seeking opportunities 
            to launch my career in the tech industry. I am passionate about creating web solutions and eager to apply 
            my knowledge of modern technologies in a professional setting. Through my academic projects and self-learning, 
            I have developed practical skills in frontend and backend development. I am a quick learner, adaptable, and 
            excited to contribute to a dynamic development team while growing my professional expertise.
          </p>
          <div className="skills">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              <li><FaHtml5 className="skill-icon html" title="HTML5" /></li>
              <li><FaCss3Alt className="skill-icon css" title="CSS3" /></li>
              <li><FaJs className="skill-icon javascript" title="JavaScript" /></li>
              <li><FaJava className="skill-icon java" title="Java" /></li>
              <li><FaPython className="skill-icon python" title="Python" /></li>
              <li><SiCplusplus className="skill-icon cpp" title="C/C++" /></li>
              <li><FaNodeJs className="skill-icon node" title="Node.js" /></li>
              <li><SiMysql className="skill-icon mysql" title="SQL" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;