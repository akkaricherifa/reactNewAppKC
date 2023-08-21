import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-nav">
      <li>
              <Link to="/inscription">Inscription</Link>
            </li>
            <br></br>

        <li className="nav-item"><a href="/inscription">Inscription</a></li>
        <li className="nav-item"><a href="/signIn">Se Connecter</a></li>
        <li className="nav-item"><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  
  );
}
export default Navbar;