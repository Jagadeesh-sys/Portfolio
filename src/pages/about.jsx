
import React from 'react';
import '../styles/about.css';
import { FaMeteor } from 'react-icons/fa';
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section className='about-me-section' id='about'>
      <div className="about-content-wrapper">
        <div className="about-left-column">
          <SectionTitle title='ABOUT' subTitle='ME' />
          {/* Decorative element resembling the dots trace */}
          <div className="decoration-dots">
            <FaMeteor className="meteor-icon-small" />
          </div>
        </div>

        <div className="about-right-column">
          <div className='intro-box'>
            <p className="intro-greeting">
              👋 Hey, I'm Jagadeesh Koppisetti, a Full Stack Developer.
            </p>
            <p>
              I am an aspiring <strong>Artificial Intelligence and Data Science</strong> engineer with a strong foundation in <strong>Java, Python, and Web Technologies</strong>.
            </p>
            <p>
              I have experience building <strong>Machine Learning models</strong>, <strong>NLP tools</strong>, and <strong>Full Stack Web Applications</strong>. I enjoy solving complex problems and creating intuitive user experiences.
            </p>
          </div>

          <div className="timeline-section">
            <div className='timeline-group'>
              <h2 className="timeline-heading">Experience</h2>
              <div className='timeline-item'>
                <h3 className='designation'>Software Trainee Intern</h3>
                <p className='place'>
                  @ AIMERS Society <span className="separator">|</span> December 2024 - April 2025
                </p>
                <div className='timeline-description'>
                  <ul>
                    <li>Completed a 4-month internship as a Software Trainee.</li>
                    <li>Built a <strong>Math Visualization Tool</strong> using <strong>React.js</strong> to help students understand mathematical concepts.</li>
                    <li>Implemented features like graph plotting and geometric constructions.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='timeline-group'>
              <h2 className="timeline-heading">Education</h2>
              <div className='timeline-item'>
                <h3 className='designation'>B.Tech - Artificial Intelligence and Data Science</h3>
                <p className='place'>
                  Lakireddy Balireddy College of Engineering <span className="separator">|</span> 2022 - 2025
                </p>
                <div className='timeline-description'>
                  CGPA: 8.20 | Andhra Pradesh, India
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

