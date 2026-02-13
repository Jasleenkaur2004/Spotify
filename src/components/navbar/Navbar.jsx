import React from 'react';
import './navbar.css';
import { FaSpotify } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaSpotify className="spotify-icon" />
        <h1>Jasleen Kaur</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#browse">Browse</a></li>
        <li><a href="#library">Library</a></li>
        <li><a href="#premium">Premium</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

