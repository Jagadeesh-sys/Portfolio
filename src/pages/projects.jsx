import React, { useState } from 'react';
import '../styles/projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sparkImage from '../images/spark.png';
import musicImage from '../images/music.png';
import plantImage from '../images/plant.png';
import mathvizImage from '../images/mathviz.png';
import weatherImage from '../images/weather.png';
import AgroLinkImage from '../images/AgroLink.png';


const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);

  const projects = [
    {
      title: "AgroLink Farmer Marketplace",
      description: "A digital marketplace connecting farmers directly with buyers. Features real-time listings, secure transactions, and a robust backend. Deployed on Railway for high availability.",
      tech: ["Java", "Servlets", "JDBC", "MySQL", "React", "Docker", "Railway"],
      github: "https://github.com/Jagadeesh-sys/AgroLink-Farmer-MarketPlace",
      demo: "https://agrolink-farmer-marketplace-production.up.railway.app/",
      image: AgroLinkImage
    },
    {
      title: "MusicWeb-Django",
      description: "A comprehensive music management web application built with Django. Features include playlist creation, music playback, user authentication, and a responsive interface for seamless music organization.",
      tech: ["HTML", "CSS", "Django", "Python", "SQLite"],
      github: "https://github.com/Jagadeesh-sys/MusicWeb-Django",
      demo: null,
      image: musicImage
    },
    {
      title: "Spark Virtual Assistant",
      description: "An intelligent virtual assistant powered by Python. Capable of voice commands, task automation, weather updates, and basic conversation. Implements speech recognition and natural language processing.",
      tech: ["Python", "Speech Recognition", "NLP", "APIs"],
      github: "https://github.com/Jagadeesh-sys/Spark-virtual-Assistant",
      demo: null,
      image: sparkImage
    },
    {
      title: "Plant Disease Detection",
      description: "Advanced plant disease detection system using YOLOv8. Helps farmers and gardeners identify plant diseases through image recognition. Includes a comprehensive database of common plant diseases.",
      tech: ["Python", "YOLOv8", "Machine Learning", "OpenCV"],
      github: "https://github.com/Jagadeesh-sys/Plant-Disease-Detection-Using-YOLOv8",
      demo: null,
      image: plantImage
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather forecasting application with interactive maps and detailed weather information. Features include 7-day forecast, weather alerts, and location-based services.",
      tech: ["JavaScript", "React", "Weather API", "CSS"],
      github: "https://github.com/Jagadeesh-sys/Weather-Forecast-App",
      demo: "https://jagadeesh-sys.github.io/Weather-Forecast-App/",
      image: weatherImage
    },
    {
      title: "MathViz React App",
      description: "Interactive mathematical visualization tool built with React. Helps students understand complex mathematical concepts through dynamic visualizations and interactive examples.",
      tech: ["React", "JavaScript", "D3.js", "MathJax"],
      github: "https://github.com/Jagadeesh-sys/MathViz-React-app",
      demo: "https://mathviz.netlify.app/",
      image: mathvizImage
    }
  ];
  const toggleProjectDescription = (index) => {
    setExpandedProjects(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="projects-container" style={{ marginBottom: '1rem' }}>  {/* Reduced from 2rem */}
      <div className="projects-header">
        <h1>My Projects</h1>
        <p className="subtitle">Showcasing my technical expertise through real-world applications</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <h3>{project.title}</h3>
            {expandedProjects.includes(index) && (
              <p className="project-description">{project.description}</p>
            )}
            <div className="project-tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn code-btn">
                <FaGithub /> Code
              </a>
              {project.demo && (
                <a href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn demo-btn">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              <button
                onClick={() => toggleProjectDescription(index)}
                className="project-btn view-btn"
              >
                {expandedProjects.includes(index) ? 'View Less' : 'View More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;