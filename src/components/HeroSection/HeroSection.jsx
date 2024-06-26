import React from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className='hero-title'>Explore the sights of the Azores</h2>
        <p className='hero-text'>A place where nature and adventure unite</p>
        <button className='hero-button'>Book now</button>
      </div>

      <div className="navigation-buttons">
        <button className="left-button">&larr;</button>
        <button className="right-button button--active">&rarr;</button>
      </div>
      <div className="scroll-container">
        <p>Scroll down</p>
        <button className="scroll-button">&darr;</button>
      </div>

    </section>
  );
};
