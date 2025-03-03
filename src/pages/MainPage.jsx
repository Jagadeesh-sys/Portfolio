import React from 'react';
import Home from './home';
import About from './about';
import Contact from './contact';
import Navbar from '../components/Navbar';
import Projects from './projects';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;