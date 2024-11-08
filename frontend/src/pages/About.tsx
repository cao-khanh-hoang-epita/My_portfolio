// src/pages/Home.tsx

import React from 'react';
import '../styles/About.css';
import logo from '../logo.jpg'; // Large version of your logo image

const About: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="blur-container">
            <h1>About Me</h1>
            <h2>Software Developer | Typescript | Python | Javascript</h2>
            <p>
            After two enriching years of studies and experiences in France, I am on the verge of completing my Bachelor's in Computer Science at EPITA Paris, a journey that has deepened my technical expertise and cultural adaptability. My academic path at EPITA has equipped me with a solid foundation in programming languages and technologies, including Flutter, Dart, Node.js, JavaScript, React, Flask, and Python. Alongside technical skills, I have honed essential soft skills like punctuality, teamwork, and time management, which I value greatly and strive to bring into any work environment.
            </p>
            <p>
            My professional experience includes internships in both France and Vietnam, where I worked as a Mobile Software Developer and Web Developer. My recent role at TPBank involved building an Android mobile banking authentication application using Flutter and Dart. This experience developed my skills in API calls, user interface design, and collaboration in a team-oriented setting with regular meetings to align on project goals. Additionally, my internship at Ploutos-Origins in Paris allowed me to work on the company's website using TypeScript and React. Applying Agile methodologies and focusing on testing and debugging, I contributed to a highly functional and user-friendly product, working closely with developers to maintain software quality.
            </p>
            <p>
            Beyond my professional aspirations, I am passionate about football, travel, video games, music, and films, which have enriched my perspective on teamwork and creativity. I am eager to bring my diverse skills and experiences to a Developer role, contributing to a company's sustainable growth while furthering my knowledge and abilities in a professional and dynamic environment. With proficiency in English (C1 level) and an improving grasp of French (A2.2 level), I am confident in my ability to adapt and communicate effectively within multicultural teams.
            </p>
          </div>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Hoang Cao Khanh" />
        </div>
      </section>
    </div>
  );
};

export default About;
