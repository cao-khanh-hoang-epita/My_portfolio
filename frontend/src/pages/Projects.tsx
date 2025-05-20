// src/pages/Projects.tsx

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faReact, 
  faJs, 
  faPython, 
  faNode 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faGlobe, 
  faFilter, 
  faMobile, 
  faServer, 
  faLayerGroup,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

// Import project images
import projectImage1 from '../awsproject.jpg';
import projectImage2 from '../pythonuberproject.jpg';
import projectImage3 from '../chatappproject.jpg';
import projectImage4 from '../softwareintegration_project.jpg';
import projectImage5 from '../PORTFOLIO_project.jpg';
import projectImage6 from '../flutterdart_project.jpg';

// Define project data structure
interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string[];
  repoLink: string;
  demoLink?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  // State for projects, filtering, and animations
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [animatedProjects, setAnimatedProjects] = useState<Project[]>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  
  // Comprehensive project data
  const projects: Project[] = [
    { 
      id: 1, 
      image: projectImage1, 
      title: "AWS Amplify Authentication", 
      description: "User authentication system with AWS Amplify",
      longDescription: "A comprehensive authentication system built with AWS Amplify, Node.js, and React. Features include secure login, signup, and logout functionality, password recovery, and email verification. The application demonstrates secure user management principles and AWS cloud integration.",
      technologies: ["React", "Node.js", "AWS Amplify", "JavaScript"],
      category: ["web", "frontend", "backend", "cloud"],
      repoLink: "https://github.com/cao-khanh-hoang-epita/awsaws-kwason",
      demoLink: "https://example.com/aws-demo",
      featured: true
    },
    { 
      id: 2, 
      image: projectImage2, 
      title: "Python Uber-like Application", 
      description: "Ride-sharing web application with Python & Flask",
      longDescription: "A web application that replicates core features of the Uber platform, developed using Python, Flask, and MongoDB. The application includes user registration, ride booking, driver matching, and route visualization. It demonstrates both frontend and backend development skills as well as database management.",
      technologies: ["Python", "Flask", "MongoDB", "HTML/CSS", "JavaScript"],
      category: ["web", "backend", "database"],
      repoLink: "https://github.com/cao-khanh-hoang-epita/Final_python_uber",
      featured: true
    },
    { 
      id: 3, 
      image: projectImage3, 
      title: "Language Learning AI Chatbot", 
      description: "ChatGPT-powered language learning application",
      longDescription: "An interactive chat application designed for language learning, specifically for French and English. Built with Node.js, React, MongoDB, and integrated with ChatGPT API. The application provides real-time conversations, vocabulary suggestions, grammar corrections, and tracks user progress.",
      technologies: ["Node.js", "React", "MongoDB", "ChatGPT API", "WebSockets"],
      category: ["web", "frontend", "backend", "ai"],
      repoLink: "https://github.com/cao-khanh-hoang-epita/french-english-learning-chatbot"
    },
    { 
      id: 4, 
      image: projectImage4, 
      title: "CI/CD Pipeline Integration", 
      description: "Software integration with CI/CD implementation",
      longDescription: "A project focused on implementing a CI/CD pipeline for a JavaScript to TypeScript migration. Includes unit testing, integration testing, and automated deployment. The project demonstrates DevOps principles, code quality assurance, and modern software development practices.",
      technologies: ["TypeScript", "JavaScript", "Jest", "GitHub Actions", "Docker"],
      category: ["devops", "testing", "backend"],
      repoLink: "https://github.com/t1skin/CI-CD-pipeline"
    },
    { 
      id: 5, 
      image: projectImage5, 
      title: "Personal Portfolio Website", 
      description: "Professional portfolio built with React & TypeScript",
      longDescription: "A responsive personal portfolio website developed using React, TypeScript, and modern CSS. Features include responsive design, smooth animations, project showcases, and contact form integration. The website serves as a demonstration of frontend development skills and UI/UX principles.",
      technologies: ["React", "TypeScript", "CSS", "Responsive Design"],
      category: ["web", "frontend", "ui/ux"],
      repoLink: "https://github.com/cao-khanh-hoang-epita/My_portfolio",
      featured: true
    },
    { 
      id: 6, 
      image: projectImage6, 
      title: "Banking Authentication App", 
      description: "Mobile banking authentication with Flutter & Dart",
      longDescription: "A secure mobile authentication application developed for TPBank during an internship. Built with Flutter and Dart, it features biometric authentication, QR code scanning for quick authentication, and secure API integration. The app is used by bank staff to track working schedules and authenticate securely.",
      technologies: ["Flutter", "Dart", "RESTful API", "Security", "Mobile UI"],
      category: ["mobile", "security", "ui/ux"],
      repoLink: "https://google.com",
      featured: true
    },
  ];
  
  // Initialize with all projects
  useEffect(() => {
    setAnimatedProjects(projects);
  }, []);
  
  // Handle filtering
  const filterProjects = (filter: string) => {
    setIsFiltering(true);
    setSelectedFilter(filter);
    
    setTimeout(() => {
      let filteredProjects;
      
      if (filter === 'all') {
        filteredProjects = projects;
      } else if (filter === 'featured') {
        filteredProjects = projects.filter(project => project.featured);
      } else {
        filteredProjects = projects.filter(project => 
          project.category.includes(filter)
        );
      }
      
      setAnimatedProjects(filteredProjects);
      setIsFiltering(false);
    }, 300);
  };
  
  // Get technology icon based on name
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('react')) return <FontAwesomeIcon icon={faReact} />;
    if (techLower.includes('node')) return <FontAwesomeIcon icon={faNode} />;
    if (techLower.includes('javascript') || techLower.includes('js')) return <FontAwesomeIcon icon={faJs} />;
    if (techLower.includes('python')) return <FontAwesomeIcon icon={faPython} />;
    if (techLower.includes('mobile') || techLower.includes('flutter')) return <FontAwesomeIcon icon={faMobile} />;
    if (techLower.includes('api') || techLower.includes('server')) return <FontAwesomeIcon icon={faServer} />;
    
    return <FontAwesomeIcon icon={faCode} />;
  };
  
  return (
    <div className="projects-container">
      {/* Projects Header */}
      <section className="projects-header">
        <h1>My <span className="highlight">Projects</span></h1>
        <div className="section-divider"></div>
        <p className="projects-subtitle">
          Here's a collection of my recent work. Each project demonstrates different skills and technologies.
        </p>
      </section>
      
      {/* Filters */}
      <section className="projects-filters">
        <div className="filter-label">
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter by:</span>
        </div>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => filterProjects('all')}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            All
          </button>
          
          <button 
            className={`filter-btn ${selectedFilter === 'featured' ? 'active' : ''}`}
            onClick={() => filterProjects('featured')}
          >
            <FontAwesomeIcon icon={faStar} />
            Featured
          </button>
          
          <button 
            className={`filter-btn ${selectedFilter === 'web' ? 'active' : ''}`}
            onClick={() => filterProjects('web')}
          >
            <FontAwesomeIcon icon={faGlobe} />
            Web
          </button>
          
          <button 
            className={`filter-btn ${selectedFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => filterProjects('mobile')}
          >
            <FontAwesomeIcon icon={faMobile} />
            Mobile
          </button>
          
          <button 
            className={`filter-btn ${selectedFilter === 'backend' ? 'active' : ''}`}
            onClick={() => filterProjects('backend')}
          >
            <FontAwesomeIcon icon={faServer} />
            Backend
          </button>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className={`projects-grid ${isFiltering ? 'filtering' : ''}`}>
        {animatedProjects.map((project) => (
          <div 
            className="project-card" 
            key={project.id}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="image-overlay">
                <div className="project-links">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Repository</span>
                  </a>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FontAwesomeIcon icon={faGlobe} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <div className="tech-tag" key={index}>
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </div>
                ))}
                {project.technologies.length > 4 && (
                  <div className="tech-tag">
                    <span>+{project.technologies.length - 4}</span>
                  </div>
                )}
              </div>
              
              <div className="project-details">
                <p>{project.longDescription || project.description}</p>
                
                <div className="project-buttons">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>View Code</span>
                  </a>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                      <FontAwesomeIcon icon={faGlobe} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      {/* No Projects Message */}
      {animatedProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects match the selected filter. Try another category.</p>
          <button className="reset-btn" onClick={() => filterProjects('all')}>
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;