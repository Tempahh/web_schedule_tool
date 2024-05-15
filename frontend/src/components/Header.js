// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className="logo"></div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/scheduler">Schedule</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;