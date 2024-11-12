// src/pages/Project.tsx

import React, { useState } from 'react';
import '../styles/Project.css';
import projectImage1 from '../awsproject.jpg';
import projectImage2 from '../pythonuberproject.jpg';
import projectImage3 from '../chatappproject.jpg';
import projectImage4 from '../softwareintegration_project.jpg';
import projectImage5 from '../PORTFOLIO_project.jpg';
import projectImage6 from '../flutterdart_project.jpg';

const projects = [
  { id: 1, image: projectImage1, title: "Authentication aws ampilify project", description: "A project dedicated to building a simple authentication app with login, signup and logout using amplify aws with node js and react", link: "https://github.com/cao-khanh-hoang-epita/awsaws-kwason" },
  { id: 2, image: projectImage2, title: "Python Uber-liked web project", description: "A project of building a webapp that has features like Uber app using Python, Flask and MongoDB", link: "https://github.com/cao-khanh-hoang-epita/Final_python_uber" },
  { id: 3, image: projectImage3, title: "Language-AI chatapp project", description: "A Node js , React , MongoDB and ChatGPT API project of creating a chat application for user on 1 side and AI on the other side dedicated to learning French and English", link: "https://github.com/cao-khanh-hoang-epita/french-english-learning-chatbot" },
  { id: 4, image: projectImage4, title: "Software Integration project", description: "A project dedicated to integrating language Javascript -> Typescript  and integrate unit test, integration test for implementing CI/CD pipeline", link: "https://github.com/t1skin/CI-CD-pipeline" },
  { id: 5, image: projectImage5, title: "My Portfolio Project", description: "This is the project of exactly what you are seeing right now, this is a project for enhancing my skills with Node, React and Typescript", link: "https://github.com/cao-khanh-hoang-epita/My_portfolio" },
  { id: 6, image: projectImage6, title: "Authentication Bank Mobile Software", description: "A fully functional android software that I built by using Flutter and Dart during my internship in TP Bank dedicated to be used for authentication purposes among the staffs in the bank to keep track of their working schedule", link: "https://google.com" },
];

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleDetails = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1> {/* Title for the projects section */}
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id} onClick={() => toggleDetails(project.id)}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <button className="arrow-button">↓</button>
            {expandedProject === project.id && (
              <div className="project-details">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project on Github</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
