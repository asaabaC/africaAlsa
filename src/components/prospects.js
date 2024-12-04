import React from 'react';
import './prospects.css'; // Import your CSS for styling

const FutureProspects = () => {
  return (
    <div className="future-prospects-container">
      <h1 className="title">Future Prospects</h1>
      <div className="content">
        <div className="text-section">
          <h2>ALSAfrica Headquarters</h2>
          <p>The organization aims to establish its headquarters, providing a central hub for operations.</p>

          <h2>Education Expansion</h2>
          <p>Building primary and post-primary schools for vulnerable children, ensuring their holistic development.</p>

          <h2>Agricultural Training Center</h2>
          <p>Plans to procure 250 acres of land for agriculture, training, and sustainable community development.</p>

          <h2>Home for the Elderly and Orphanage</h2>
          <p>Future goals include setting up homes for the elderly and orphanages to provide care and support.</p>

          <h2>Global Impact</h2>
          <p>ALSAfrica aims to expand its model to benefit Africa and the world through cultural exchange, moral upbringing, and sustainable community projects.</p>
        </div>
        
        <div className="image-section">
          <img src="/image7.jpg" alt="Future Prospects" className="future-image" />
        </div>
      </div>
    </div>
  );
};

export default FutureProspects;
