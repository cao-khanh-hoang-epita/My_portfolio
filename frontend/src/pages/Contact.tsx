import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:hoangcaokhanhn2004@gmail.com">hoangcaokhanhn2004@gmail.com</a></p>
        <p>LinkedIn: 
          <a href="https://www.linkedin.com/in/hoang-cao-khanh-bb8931254/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/hoang-cao-khanh-bb8931254/
          </a>
        </p>
        <p>GitHub: 
          <a href="https://github.com/cao-khanh-hoang-epita" target="_blank" rel="noopener noreferrer">
            https://github.com/cao-khanh-hoang-epita
          </a>
        </p>
        <p>Phone: <a href="tel:+33749943755">+33749943755</a></p>
        <p>Address: La Defense, Paris, France</p>
      </div>
    </div>
  );
};

export default Contact;
