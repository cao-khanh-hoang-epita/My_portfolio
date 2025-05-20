// src/App.tsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import './styles/App.css';

// Custom hook for getting current location
const usePageLocation = () => {
  const location = useLocation();
  return location.pathname;
};

// Navbar component with mobile responsiveness
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = usePageLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Hoang Cao Khanh Logo" className="logo" />
        </Link>
        <Link to="/" className="name-link" onClick={closeMobileMenu}>
          <span className="name">HOANG CAO KHANH</span>
        </Link>
      </div>
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      
      <div className={`navbar-right ${isOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className={`nav-link ${currentPath === '/' ? 'active-link' : ''}`}
          onClick={closeMobileMenu}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${currentPath === '/about' ? 'active-link' : ''}`}
          onClick={closeMobileMenu}
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className={`nav-link ${currentPath === '/projects' ? 'active-link' : ''}`}
          onClick={closeMobileMenu}
        >
          Projects
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${currentPath === '/contact' ? 'active-link' : ''}`}
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div className="content">
                <Home />
              </div>
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <div className="content">
                <About />
              </div>
            </>
          } />
          <Route path="/projects" element={
            <>
              <Navbar />
              <div className="content">
                <Projects />
              </div>
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <div className="content">
                <Contact />
              </div>
            </>
          } />
        </Routes>
        
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Hoang Cao Khanh. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;