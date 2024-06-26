import React from 'react';
import './Features.css';

const Feature = ({ imageUrl, title, description }) => {
  return (
    <div className="feature-card">
      <img src={imageUrl} alt={title} className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="features-section">
      <h2 className='features-title'>Top values for you</h2>
      <p className="features-subtitle">Try variety of benefits when using our services</p>
      <div className="features-cards">
        <Feature 
          imageUrl="https://i.ibb.co/4WfHH1B/avion.png" 
          title="Airport pickup" 
          description="We provide escort from the airport to the hotel" 
        />
        <Feature 
          imageUrl="https://i.ibb.co/bmzNkz5/img2.png" 
          title="Easy booking" 
          description="Quick and easy booking of tours for upcoming dates" 
        />
        <Feature 
          imageUrl="https://i.ibb.co/jRSctm3/account.png" 
          title="Best tour guide" 
          description="Our best tour guide is ready to guide your trip" 
        />
        <Feature 
          imageUrl="https://i.ibb.co/sFSR9gZ/descount.png" 
          title="Lots of promos" 
          description="Various promotions and drawings of tours" 
        />
      </div>
    </section>
  );
};
