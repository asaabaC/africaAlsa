import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        <Link to="/">
          <img src="/logo2.png" alt="Logo" className="header-logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="aboutDropdown" role="button">
              About Us
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/history">History</Link></li>
              <li><Link className="dropdown-item" to="/mission">Mission</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="pillarsDropdown" role="button">
              Pillars and Services
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/education">Education</Link></li>
              <li><Link className="dropdown-item" to="/youth">Youth Empowerment</Link></li>
              <li><Link className="dropdown-item" to="/youngMother">Support For Young Mothers</Link></li>
              <li><Link className="dropdown-item" to="/elderly">The Elderly</Link></li>
              <li><Link className="dropdown-item" to="/prison">Prison Support</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/future-prospects">Future Prospects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="donorsDropdown" role="button">
              Donors
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/indonor">Internal-Contibutions</Link></li>
              <li><Link className="dropdown-item" to="/outdonors">External-Donations</Link></li>
            </ul>
          </li>
        </ul>
        <div className="navbar-donate">
          <Link to="/outdonors">
            <button className="donate-button">Donate</button>
          </Link>
        </div>
      </div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </button>
    </nav>
  );
};

export default Navigation;
