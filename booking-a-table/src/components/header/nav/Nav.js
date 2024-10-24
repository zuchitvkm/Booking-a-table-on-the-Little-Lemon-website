import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Optional: Add separate styles for the navigation

const Nav = ({ isMobileMenuOpen }) => {
  return (
    <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Book Table</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
