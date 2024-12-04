import React from 'react';
import './contact.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faWhatsapp, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch with Us!</h1>
      <p className="contact-description">We'd love to hear from you. Feel free to connect with us on social media or send us a message on WhatsApp.</p>
      
      <div className="icons-container">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon facebook-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon youtube-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://wa.me/0740083880" target="_blank" rel="noreferrer" className="icon whatsapp-icon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon linkedin-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon twitter-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;