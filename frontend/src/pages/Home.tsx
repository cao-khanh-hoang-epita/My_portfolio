// src/pages/Home.tsx - With custom SVG cursor that should fix the white overlay issue

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faFileAlt, 
  faFileLines,
  faArrowDown,
  faCode,
  faMobileScreen,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';
import logo from '../logo.jpg';

// Custom blinking cursor component to replace the problematic cursor
const BlinkingCursor = () => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <svg 
      className="custom-cursor" 
      width="3" 
      height="20" 
      viewBox="0 0 3 20" 
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.1s' }}
    >
      <rect width="3" height="20" fill="#2a69e7" />
    </svg>
  );
};

const Home: React.FC = () => {
  // Reference for scroll button
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Function to handle smooth scrolling
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Text for typing effect
  const [typingText, setTypingText] = useState("");
  const fullText = "fullstack developer";
  
  // Typing animation
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.substring(0, index));
        index++;
      } else {
        // Reset after a pause
        setTimeout(() => {
          index = 0;
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  // PDF download files
  const downloadCV = "/CaoKhanhHOANG_cv_28102025.pdf"; 
  const downloadLetter = "/lettredemotivation.pdf"; 

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            {/* Only static heading */}
            <h1>Hi, I'm <span className="highlight">Hoang Cao Khanh</span></h1>
            
            {/* Separate typing animation with SVG cursor - no more CSS cursor */}
            <div className="typing-wrapper">
              <h2 className="typing-prefix">I am a</h2>
              <div className="typing-container">
                <span className="typing-text">{typingText}</span>
                {/* Replace standard cursor with SVG cursor */}
                <BlinkingCursor />
              </div>
            </div>
            
            <p className="hero-subtitle">
              Passionate software developer specializing in web and mobile applications.
              Currently completing my Bachelor's in Computer Science at EPITA Paris.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="hero-btn primary-btn">
                <FontAwesomeIcon icon={faCode} /> View My Work
              </Link>
              <Link to="/contact" className="hero-btn secondary-btn">
                <FontAwesomeIcon icon={faEnvelope} /> Contact Me
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img src={logo} alt="Hoang Cao Khanh" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        
        <button className="scroll-btn" onClick={scrollToSkills} aria-label="Scroll to skills">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </section>
      
      {/* Skills Section */}
      <section className="skills-section" ref={skillsRef}>
        <div className="section-header">
          <h2>My <span className="highlight">Skills</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="skills-container">
          <div className="skill-category">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>Frontend Development</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">TypeScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faMobileScreen} />
            </div>
            <h3>Mobile Development</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">Flutter</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Dart</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faServer} />
            </div>
            <h3>Backend Development</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Flask</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MongoDB</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download and Connect Section */}
      <section className="download-section">
        <div className="section-header">
          <h2>Download <span className="highlight">Resume</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="download-container">
          <a href={downloadCV} download className="download-btn">
            <FontAwesomeIcon icon={faFileAlt} />
            <span>Download CV</span>
          </a>
          <a href={downloadLetter} download className="download-btn">
            <FontAwesomeIcon icon={faFileLines} />
            <span>Download Motivational Letter</span>
          </a>
        </div>
        
        <div className="connect-container">
          <h3>Let's Connect</h3>
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
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-btn" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;