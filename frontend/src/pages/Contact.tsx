// src/pages/Contact.tsx

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane,
  faCheck,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  // Ref for form element
  const formRef = useRef<HTMLFormElement>(null);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the form data to a server
      // For this demo, we'll just simulate success
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset the form submission status after some time
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <section className="contact-header">
          <h1>Get In <span className="highlight">Touch</span></h1>
          <div className="section-divider"></div>
          <p className="contact-subtitle">
            Feel free to reach out if you have any questions or want to work together.
            I'm always open to discussing new projects, opportunities, and ideas.
          </p>
        </section>
        
        <section className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <a href="mailto:hoangcaokhanhn2004@gmail.com">
                  hoangcaokhanhn2004@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <a href="tel:+33749943755">+33 7 49 94 37 55</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>La Defense, Paris, France</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="contact-text">
                <h3>LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/hoang-cao-khanh-bb8931254/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Hoang Cao Khanh
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className="contact-text">
                <h3>GitHub</h3>
                <a 
                  href="https://github.com/cao-khanh-hoang-epita" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  cao-khanh-hoang-epita
                </a>
              </div>
            </div>
            
            <div className="contact-map">
              <iframe 
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.2053480139906!2d2.2317746152484066!3d48.891407708182565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664e10a533333%3A0xcdbe6c9cdcb84571!2sLa%20D%C3%A9fense%2C%20Puteaux%2C%20France!5e0!3m2!1sen!2sus!4v1621522829511!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  placeholder="Your email address"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-control" 
                  placeholder="Subject of your message"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control" 
                  placeholder="Your message"
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </>
                )}
              </button>
              
              {formSubmitted && (
                <div className="form-success">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>Your message has been sent successfully!</p>
                </div>
              )}
              
              {formError && (
                <div className="form-error">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;