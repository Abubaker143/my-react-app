import React from 'react';

const EarnWithRapido = () => {
  return (
    <section className="earn-container">
      <div className="earn-content-wrapper">
                
        <div className="earn-image-side">
          <img 
            src="https://content-cus.rapido.bike/image/showcase_image.png"
            alt="Earn with Rapido" 
            className="earn-main-img"
          />
        </div>

        <div className="earn-text-side">
          <div className="earn-header">
            <h2>Earn with Rapido</h2>
            <div className="yellow-underline-short"></div>
          </div>
          
          <p className="earn-description">
            Become a Rapido Captain. Ride when you want, work how you want, and earn on your own terms.
          </p>
          
          <button className="earn">
            Start Earning <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default EarnWithRapido;