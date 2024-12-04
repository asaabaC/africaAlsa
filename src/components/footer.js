// Footer.js
import React from 'react';
import './footer.css'; // Import your CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ALSAfrica. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
