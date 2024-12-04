import React from 'react';
import './history.css'; // Updated CSS for additional styling

const History = () => {
  return (
    <div className="history-page">
{/* Hero Section */}
        <div className="hero">
          <div className="hero-image-container">
            <img
              src="/image2.JPG"
              alt="Empowering Communities"
              className="hero-image"
            />
          </div>
          <div className="hero-text">
            <h1>Our History</h1>
            <p>
              Arise, Love, and Serve AFRICA (ALS Africa) is a non-profit Ugandan indigenous organization founded in 2021, committed to uplifting marginalized communities across Africa. Rooted in the belief that every individual deserves a chance to thrive, ALS Africa has established a comprehensive framework centered on five key pillars:
            </p>
          </div>
        </div>


      {/* History Content */}
      <div className="history-container">
        <div className="section">
          <img src="/image7.jpg" alt="Youth Empowerment" className="section-image" />
          <div className="section-text">
            <h2>Youth Empowerment</h2>
            <p>
              Recognizing the challenges faced by many youths, ALSAfrica offers vocational training, mentorship, and job placement opportunities.
            </p>
          </div>
        </div>

        <div className="section">
          <img src="/image6.jpg" alt="Maternal Support" className="section-image" />
          <div className="section-text">
            <h2>Maternal Support</h2>
            <p>
              Providing prenatal and postnatal care, counseling, and education to empower young mothers to build brighter futures.
            </p>
          </div>
        </div>

        <div className="section">
          <img src="/IMG_3736 - Copy.jpg" alt="Elder Care" className="section-image" />
          <div className="section-text">
            <h2>Elder Care</h2>
            <p>
              Offering shelter, healthcare, and companionship to honor the elderly and promote intergenerational harmony.
            </p>
          </div>
        </div>

        <div className="section">
          <img src="/IMG_3736 - Copy (2).jpg" alt="Prisoner Rehabilitation" className="section-image" />
          <div className="section-text">
            <h2>Prisoner Rehabilitation</h2>
            <p>
              Legal aid and rehabilitation programs to help prisoners reintegrate into society and reduce recidivism.
            </p>
          </div>
        </div>

        <div className="section">
          <img src="/IMG_3736 - Copy - Copy.jpg" alt="Child Education" className="section-image" />
          <div className="section-text">
            <h2>Child Education</h2>
            <p>
              Supporting early childhood development through educational resources, scholarships, and parental training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
