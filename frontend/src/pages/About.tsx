// src/pages/About.tsx - Updated with corrected high school and Font Awesome

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faGraduationCap, 
  faBriefcase, 
  faLanguage,
  faFootball,
  faPlane,
  faGamepad,
  faMusic,
  faFilm
} from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';
import logo from '../logo.jpg';

const About: React.FC = () => {
  // For animations when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.9) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in view on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content fade-in">
          <h1>About <span className="highlight">Me</span></h1>
          <div className="section-divider"></div>
          <h2>Software Developer | TypeScript | Python | JavaScript</h2>
        </div>
      </section>
      
      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-content">
          <div className="profile-image fade-in">
            <img src={logo} alt="Hoang Cao Khanh" />
          </div>
          
          <div className="profile-text fade-in">
            <div className="section-header">
              <h2>My <span className="highlight">Journey</span></h2>
              <div className="section-divider"></div>
            </div>
            
            <p>
              After two enriching years of studies and experiences in France, I am on the verge of completing my Bachelor's in Computer Science at EPITA Paris, a journey that has deepened my technical expertise and cultural adaptability.
            </p>
            
            <p>
              My academic path at EPITA has equipped me with a solid foundation in programming languages and technologies, including Flutter, Dart, Node.js, JavaScript, React, Flask, and Python. Alongside technical skills, I have honed essential soft skills like punctuality, teamwork, and time management, which I value greatly and strive to bring into any work environment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="education-section">
        <div className="section-header fade-in">
          <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="timeline">
          <div className="timeline-item fade-in">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor's in Computer Science</h3>
              <h4>EPITA: École d'Ingénieurs en Informatique, Paris</h4>
              <p className="timeline-date">2022 - 2025</p>
              <p className="timeline-description">
                Specialized in software development with a focus on web and mobile technologies.
                Coursework included algorithm design, data structures, software engineering, and project management.
              </p>
            </div>
          </div>
          
          <div className="timeline-item fade-in">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>High School Diploma</h3>
              <h4>Chuyen Su Pham High School, Vietnam</h4>
              <p className="timeline-date">2019 - 2022</p>
              <p className="timeline-description">
                Graduated with honors, focusing on mathematics and science.
                Participated in programming competitions and developed initial interest in computer science.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="experience-section">
        <div className="section-header fade-in">
          <h2><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="timeline">
          {/* New Added Experience: Aether Financial Services */}
          <div className="timeline-item fade-in">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Fullstack Developer</h3>
              <h4>Aether Financial Services, Paris</h4>
              <p className="timeline-date">March 2025 - September 2025</p>
              <p className="timeline-description">
                • Fully containerized the company's three main websites using Docker and implemented specialized monitoring with cAdvisor, Prometheus, Grafana, Loki, and Promtail for real-time logging and visualization.
              </p>
              <p className="timeline-description">
                • Took full ownership of deployment, setting up and managing databases tailored to different environments (development, staging, production) with appropriate database systems.
              </p>
              <p className="timeline-description">
                • Automated and optimized codebase management by integrating GitHub and implementing CI/CD pipelines for continuous deployment and version control.
              </p>
              <p className="timeline-description">
                • Contributed to the enhancement of the team's platform by developing new features, including new pages, routes, and database updates.
              </p>
              <p className="timeline-description">
                • Designed and developed functional APIs for ScaleX (a partner company) to support specific business operations, while ensuring sufficient resources and active monitoring.
              </p>
              <div className="tags">
                <span className="tag">Docker</span>
                <span className="tag">CI/CD</span>
                <span className="tag">Monitoring</span>
                <span className="tag">API Development</span>
                <span className="tag">Full Stack</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item fade-in">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Mobile Software Developer Intern</h3>
              <h4>TPBank, Vietnam</h4>
              <p className="timeline-date">June 2024 - August 2024</p>
              <p className="timeline-description">
                Built an Android mobile banking authentication application using Flutter and Dart.
                Developed user interface designs and implemented API calls for authentication and secure data retrieval.
                Collaborated in a team-oriented setting with regular meetings to align on project goals.
              </p>
              <div className="tags">
                <span className="tag">Flutter</span>
                <span className="tag">Dart</span>
                <span className="tag">API Integration</span>
                <span className="tag">UI Design</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item fade-in">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Web Developer Intern</h3>
              <h4>Ploutos-Origins, Paris</h4>
              <p className="timeline-date">January 2024 - March 2024</p>
              <p className="timeline-description">
                Developed the company website using TypeScript and React.
                Applied Agile methodologies and focused on testing and debugging.
                Collaborated with developers to maintain software quality and enhance user experience.
              </p>
              <div className="tags">
                <span className="tag">TypeScript</span>
                <span className="tag">React</span>
                <span className="tag">Agile</span>
                <span className="tag">Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="skills-highlights-section">
        <div className="section-header fade-in">
          <h2><FontAwesomeIcon icon={faLaptopCode} /> Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="skills-categories fade-in">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Dart</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Redux</li>
              <li>CSS Frameworks</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express</li>
              <li>Flask</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>DevOps & Tools</h3>
            <ul className="skill-list">
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Monitoring (Grafana, Prometheus)</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Mobile</h3>
            <ul className="skill-list">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Mobile UI Design</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Databases</h3>
            <ul className="skill-list">
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Languages Section */}
      <section className="languages-section">
        <div className="section-header fade-in">
          <h2><FontAwesomeIcon icon={faLanguage} /> Languages</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="languages-container fade-in">
          <div className="language-item">
            <div className="language-info">
              <h3>English</h3>
              <p>Professional working proficiency (C1)</p>
            </div>
            <div className="language-level">
              <div className="level-bar">
                <div className="level-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="language-item">
            <div className="language-info">
              <h3>French</h3>
              <p>Elementary proficiency (A2.2)</p>
            </div>
            <div className="language-level">
              <div className="level-bar">
                <div className="level-fill" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="language-item">
            <div className="language-info">
              <h3>Vietnamese</h3>
              <p>Native proficiency</p>
            </div>
            <div className="language-level">
              <div className="level-bar">
                <div className="level-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interests Section */}
      <section className="interests-section">
        <div className="section-header fade-in">
          <h2>Personal <span className="highlight">Interests</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="interests-container fade-in">
          <div className="interest-item">
            <FontAwesomeIcon icon={faFootball} />
            <p>Football</p>
          </div>
          
          <div className="interest-item">
            <FontAwesomeIcon icon={faPlane} />
            <p>Travel</p>
          </div>
          
          <div className="interest-item">
            <FontAwesomeIcon icon={faGamepad} />
            <p>Video Games</p>
          </div>
          
          <div className="interest-item">
            <FontAwesomeIcon icon={faMusic} />
            <p>Music</p>
          </div>
          
          <div className="interest-item">
            <FontAwesomeIcon icon={faFilm} />
            <p>Films</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;