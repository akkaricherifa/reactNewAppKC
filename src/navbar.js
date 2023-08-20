import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#">S'inscrire</a></li>
        <li className="nav-item"><a href="#">Se Connecter</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;