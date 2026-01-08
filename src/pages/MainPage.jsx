import React from 'react';

import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import TechStack from './TechStack';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="background-animation" />

      <Navbar />

      <section id="home" className="section">
        <Home />
      </section>

      <section id="tech-stack" className="section">
        <TechStack />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default MainPage;
