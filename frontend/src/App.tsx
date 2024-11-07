// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';
import logo from './logo.jpg'; // Import the local image file

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src={logo} // Use the local image file
            alt="Hoang Cao Khanh Logo"
            className="logo"
          />
        </div>
        <div className="navbar-center">
          <span className="name">HOANG CAO KHANH</span>
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
