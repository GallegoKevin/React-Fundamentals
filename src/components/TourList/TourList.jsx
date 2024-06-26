import React from 'react';
import './TourList.css';
import { Card } from '../Card/Card';

export const TourList = () => {
  return (
    <section className="tour-list-section">
      <h2 className='tour-title'>Choose your tour</h2>
      <div className="tour-cards">
        <Card
          title="Alone with nature"
          price="$100" 
          rating="5.0"
          imgSrc="https://i.ibb.co/QvMNQMY/alone-1.png"
        />
        <Card
          title="Jeep ride"
          price="$200"
          rating="4.9"
          imgSrc="https://i.ibb.co/S3PqYhD/camioneta.jpg"
        />
        <Card
          title="Hiking tour"
          price="$150"
          rating="5.0"
          imgSrc="https://www.ispo.com/sites/default/files/styles/listicle_header_square_desktop/public/2022-05/fabio-comparelli-uq2E2V4LhCY-unsplash.webp?h=8d251828&itok=wBRbvEH8"
        />
        <Card
          title="Corners of the island"
          price="$220"
          rating="4.8"
          imgSrc="https://i.ibb.co/6tSKSJC/paisaje.png"
        />
      </div>
      <button className="see-all-btn">See all</button>
    </section>
  );
};
