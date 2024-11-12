// src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import logo from '../logo.jpg'; // Logo or profile picture
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const text = "Hello, I am a software developer";
  const downloadCV = "../CaoKhanhHOANG_cv_28102025.pdf"; 
  const downloadLetter = "../lettre_de_motivation_Cao_Khanh_HOANG_2025.pdf"; 

  useEffect(() => {
    let index = 0;
    let isAdding = true;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      
      if (isAdding) {
        index++;
        if (index > text.length) {
          isAdding = false;
          index = text.length;
        }
      } else {
        index--;
        if (index < 0) {
          isAdding = true;
          index = 0;
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="home-container">
      <h1 className="typing-text">{displayedText}</h1>
      <div className="herop-image">
        <img src={logo} alt="Hoang Cao Khanh" />
        <h2>Let's Connect !!</h2>
      </div>
      <div className="social-links">
        <a href="mailto:hoangcaokhanhn2004@gmail.com" className="social-btn" title="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/hoang-cao-khanh-bb8931254/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/cao-khanh-hoang-epita" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div className="download-buttons">
        <a href={downloadCV} download className="download-btn">Download CV</a>
        <a href={downloadLetter} download className="download-btn">Download Motivational Letter</a>
      </div>
    </div>
  );
};

export default Home;
