import React from 'react';
import '../styles/about.css';
import profileImage from '../images/myphoto1.png';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaJava, FaReact } from 'react-icons/fa';
import { SiC, SiMysql, SiSpringboot, SiGit, SiGithub, SiEclipseide, SiBootstrap, SiNetlify } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

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
          <h2>Code Creator & Problem Solver</h2>
          <p>
            Recent graduate and software developer skilled in Java, React, and Node.js. I enjoy 
            transforming ideas into seamless, user-friendly web applications. Fast learner, adaptable, 
            and passionate about creating digital solutions that make an impact.
          </p>

          <div className="skills">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              {/* First three: Java, C, Python */}
              <li>
                <FaJava className="skill-icon icon-java" title="Java" />
                <span className="skill-label">Java</span>
              </li>
              <li>
                <SiC className="skill-icon icon-c" title="C" />
                <span className="skill-label">C</span>
              </li>
              <li>
                <FaPython className="skill-icon icon-python" title="Python" />
                <span className="skill-label">Python</span>
              </li>

              {/* Remaining skills */}
              <li>
                <FaHtml5 className="skill-icon icon-html" title="HTML5" />
                <span className="skill-label">HTML5</span>
              </li>
              <li>
                <FaCss3Alt className="skill-icon icon-css" title="CSS3" />
                <span className="skill-label">CSS3</span>
              </li>
              <li>
                <FaJs className="skill-icon icon-js" title="JavaScript" />
                <span className="skill-label">JavaScript</span>
              </li>
              <li>
                <FaReact className="skill-icon icon-react" title="React.js" />
                <span className="skill-label">React.js</span>
              </li>
              <li>
                <SiSpringboot className="skill-icon icon-spring" title="Spring Boot" />
                <span className="skill-label">Spring Boot</span>
              </li>
              <li>
                <FaNodeJs className="skill-icon icon-node" title="Node.js" />
                <span className="skill-label">Node.js</span>
              </li>
              <li>
                <SiMysql className="skill-icon icon-sql" title="SQL" />
                <span className="skill-label">SQL</span>
              </li>

              {/* Tools */}
              <li>
                <SiGit className="skill-icon icon-git" title="Git" />
                <span className="skill-label">Git</span>
              </li>
              <li>
                <SiGithub className="skill-icon icon-github" title="GitHub" />
                <span className="skill-label">GitHub</span>
              </li>
              <li>
                <TbBrandVscode className="skill-icon icon-vscode" title="VS Code" />
                <span className="skill-label">VS Code</span>
              </li>
              <li>
                <SiEclipseide className="skill-icon icon-eclipse" title="Eclipse" />
                <span className="skill-label">Eclipse</span>
              </li>
              <li>
                <SiBootstrap className="skill-icon icon-bootstrap" title="Bootstrap" />
                <span className="skill-label">Bootstrap</span>
              </li>
              <li>
                <SiNetlify className="skill-icon icon-netlify" title="Netlify" />
                <span className="skill-label">Netlify</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;