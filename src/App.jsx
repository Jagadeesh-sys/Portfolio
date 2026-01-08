import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
import ScrollBar from './components/ScrollBar';

import InfoSection from './pages/home'; // Mapping InfoSection to Home
import AboutMe from './pages/about';    // Mapping AboutMe to About
import TechStack from './pages/TechStack';
import Projects from './pages/projects';
import Contact from './pages/contact';

import './styles/MainPage.css';
import './App.css';
// import './styles/about-me.css';
// import './styles/floating-button.css';
// import './styles/glow-box.css';
// import './styles/info-section.css';
// import './styles/mouse-trail.css';
// import './styles/tech-stack.css';
// import './styles/text-hover.css';
// import './styles/title.css';

function App() {
  return (
    <div className="App main-page">
      <ScrollBar />
      <MouseTrail />
      <Navbar />

      <InfoSection />
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
