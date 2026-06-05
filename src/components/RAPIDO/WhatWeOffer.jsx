import React from 'react';

const WhatWeOffer = () => {
  const offers = [
    {
      id: 1,
      image: "https://content-cus.rapido.bike/image/image.png",
      title: "Quick Pickup",
      description: "Pickups within minutes that help you save time on every ride. A Rapido is always nearby when you need to get moving."
    },
    {
      id: 2,
      image: "https://content-cus.rapido.bike/image/bestfare_offer.png", 
      title: "Best Fares",
      description: "Affordable prices designed for everyday rides. Travel more, spend less without compromising on comfort."
    },
    {
      id: 3,
      image: "https://content-cus.rapido.bike/image/nevertofar_offer.png", 
      title: "Never Too Far",
      description: "Present across 400+ cities and counting. Wherever you go, find a Rapido ride close by."
    }
  ];

  return (
    <section className="offers-container">
      <div className="offers-header">
        <h2>What we offer</h2>
        <div className="yellow-underline"></div>
      </div>
      
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="image-wrapper">
              <img src={offer.image} alt={offer.title} />
            </div>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;