import React from 'react';
import './elderly.css'; // Import the CSS for styling

const Elderly = () => {
  return (
    <div className="elderly-container">
      <h1 className="elderly-title">Elderly Pillar</h1>
      <div className="elderly-content">
        <div className="elderly-text">
          <p>
            The Elderly Pillar of <strong>ALSAfrica</strong> focuses on providing essential support to elderly individuals aged 70 and above, particularly those deemed vulnerable by the community. A selection process ensures that only those truly in need are included, with approval from the local council (LC) and community committee.
          </p>
          <p>
            Once approved, these elderly individuals receive vital services such as medical care, nutritious food, shelter, and clothing, all aimed at improving their quality of life. ALSA is committed to caring for the elderly, recognizing their invaluable contributions and ensuring they live with dignity and comfort.
          </p>
        </div>
        <div className="elderly-image">
          <img src="/image9.jpg" alt="Elderly Support Initiative" />
        </div>
      </div>
    </div>
  );
};

export default Elderly;
