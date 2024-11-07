// src/pages/Home.tsx

import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the main landing section.</p>
      </section>
      <section className="about">
        <h2>About Me</h2>
        <p>Here's some information about me.</p>
      </section>
      <section className="projects">
        <h2>My Projects</h2>
        <p>Details of my projects will go here.</p>
      </section>
      <section className="footer">
        <h2>Footer</h2>
        <p>Footer content goes here.</p>
      </section>
    </div>
  );
};

export default Home;
