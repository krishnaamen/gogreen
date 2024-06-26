// NavBar.js

import React from 'react';
import logo from '../assets/logo1.png'; // Importing the logo image

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#charging-solutions" className="nav-link">Charging Solutions</a>
            <div className="dropdown-content">
              <a href="#">Solution 1</a>
              <a href="#">Solution 2</a>
            </div>
          </li>



          <li className="nav-item">
            <a href="#products" className="nav-link">Products</a>
          </li>


          <li className="nav-item">
            <a href="#contact-us" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
