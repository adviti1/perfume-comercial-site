import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="text-focus-in brand">Perfuma</span>
        </div>
        <div className="navbar-right">
          <a href="#logout" className="nav-link text-focus-in">Logout</a>
          <a href="#about" className="nav-link text-focus-in">About</a>
          <a href="#contact" className="nav-link text-focus-in">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;