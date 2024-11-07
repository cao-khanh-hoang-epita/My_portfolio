// src/pages/Home.tsx

import React from 'react';
import '../styles/Home.css';
import logo from '../logo.jpg'; // Large version of your logo image

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="blur-container">
            <h1>Xin chào, Cao Khanh is here!!</h1>
            <p>
              After two years of studies and living in France, where I am about to complete my Bachelor's in Computer Science at EPITA Paris, I aspire to work in a professional and dynamic environment to maximize my skills. I am particularly interested in Developer roles, where I can leverage my experiences from internships in both France and Vietnam to contribute to sustainable company growth.
            </p>
          </div>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Hoang Cao Khanh" />
        </div>
      </section>

      <section className="about">
        <div className="centered-blur-container">
          <h2>About Me</h2>
        </div>
        <p>
          After two years of studies and living in France, where I am about to complete my Bachelor's in Computer Science at EPITA Paris, I aspire to work in a professional and dynamic environment to maximize my skills. I am particularly interested in Developer roles, where I can leverage my experiences from internships in both France and Vietnam to contribute to sustainable company growth.
        </p>
      </section>

      <section className="projects">
        <div className="centered-blur-container">
          <h2>Professional Experience</h2>
        </div>
        <h3>Ploutos-Origins - Paris, France</h3>
        <p>06/2023 - 08/2023</p>
        <p>Developed the company website using TypeScript and React. Applied AGILE methodology, collaborated with the team to eliminate software bugs, and implemented software engineering best practices.</p>

        <h3>TPBank - Hanoi, Vietnam</h3>
        <p>07/2024 - 09/2024</p>
        <p>Created an Android mobile authentication app with Flutter and Dart. Implemented QR code authentication and worked closely with the team to optimize user experience and functionality.</p>

        <h3>API Gateway Service - Paris, France</h3>
        <p>04/2024 - 06/2024</p>
        <p>Developed API gateway services using Django, Python, Node.js, and MongoDB. Worked with team members on GitHub to streamline the workflow and improve service integration.</p>
      </section>
    </div>
  );
};

export default Home;
