import React from 'react';
import './gallery.css'; // Import the CSS for styling

const GalleryPage = () => {
  return (
    <div className="gallery-page-container">
      <h1 className="gallery-page-title">Donation Events Gallery</h1>
      <div className="indonor-gallery">
        {/* Gallery images */}
        <img src="/image1.jpg" alt="Donation Event 1" />
        <img src="/image2.jpg" alt="Donation Event 2" />
        <img src="/image3.jpg" alt="Donation Event 3" />
        <img src="/image4.jpg" alt="Donation Event 4" />
        <img src="/image6.jpg" alt="Donation Event 6" />
        <img src="/image5.jpg" alt="Donation Event 5" />
      </div>
    </div>
  );
};

export default GalleryPage;