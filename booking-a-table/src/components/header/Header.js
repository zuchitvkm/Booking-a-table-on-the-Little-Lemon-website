import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav/Nav';  // Import the new NavMenu component
import './header.css'; // Assuming you will add some styles
import logo from '../../assets/images/Logo.svg'
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <Nav isMobileMenuOpen={isMobileMenuOpen} />
      <button className="hamburger" onClick={toggleMobileMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </header>
  );
};

export default Header;
