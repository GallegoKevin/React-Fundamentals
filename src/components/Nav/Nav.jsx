import React from 'react';
import './Nav.css';

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="https://i.ibb.co/gW04Bp6/icon-logo-4.png" alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#our-tours">Our tours</a></li>
        <li><a href="#about-us">About us</a></li>
        <li><a href="#booking">Booking</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div className="nav-menu-icon">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};
