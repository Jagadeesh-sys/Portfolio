import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/Jagadeesh-sys" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jagadeesh-koppisetti-173701261/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:koppisettijagadeesh123@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">© 2024 Jagadeesh Koppisetti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;