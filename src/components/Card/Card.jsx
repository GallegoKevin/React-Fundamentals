import React from 'react';
import './Card.css';

export const Card = ({ title, price, rating, imgSrc }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={imgSrc} alt={title} className="card-img" />
        <div className="rating">
          <span>{rating}</span>
          <span className="star">★</span>
        </div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-footer">
          <p><strong>{price}</strong> / person</p>
          <button className="arrow-button">→</button>
        </div>
      </div>
    </div>
  );
};
