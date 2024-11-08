// src/pages/Project.tsx

import React, { useState } from 'react';
import '../styles/Project.css';
import projectImage1 from '../awsproject.jpg';
import projectImage2 from '../bg1.jpg';
import projectImage3 from '../bgh.jpg';
import projectImage4 from '../bg4.jpg';
import projectImage5 from '../bg3.jpg';
import projectImage6 from '../bgh.jpg';

const projects = [
  { id: 1, image: projectImage1, title: "Project One", description: "Description of Project One", link: "https://project-one.com" },
  { id: 2, image: projectImage2, title: "Project Two", description: "Description of Project Two", link: "https://project-two.com" },
  { id: 3, image: projectImage3, title: "Project Three", description: "Description of Project Three", link: "https://project-three.com" },
  { id: 4, image: projectImage4, title: "Project Four", description: "Description of Project Four", link: "https://project-four.com" },
  { id: 5, image: projectImage5, title: "Project Five", description: "Description of Project Five", link: "https://project-five.com" },
  { id: 6, image: projectImage6, title: "Project Six", description: "Description of Project Six", link: "https://project-six.com" },
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
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
