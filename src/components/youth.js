import React from 'react';
import './youth.css'; // Import the CSS for styling

const YouthEmpowerment = () => {
  return (
    <div className="youth-container">
      <h1 className="youth-title">Youth Empowerment Pillar</h1>
      <div className="youth-content">
        <div className="youth-text">
          <p>
            The Youth Empowerment pillar of <strong>ALSAfrica</strong> focuses on supporting vulnerable youth who demonstrate both a willingness and the ability to be equipped with the necessary skills for success. Recognizing the challenges faced by many young people, such as unemployment and a lack of access to education and training, ALSA aims to create meaningful opportunities for personal and professional development.
          </p>
          <p>
            Through various programs, ALSAfrica identifies and nurtures the potential within these young individuals, encouraging them to generate innovative ideas and pursue their passions. The organization offers comprehensive training initiatives that equip youth with practical skills in areas such as entrepreneurship, vocational trades, and life skills. This training is supplemented with mentorship programs where experienced professionals guide and inspire the youth, fostering a supportive environment that promotes growth and self-confidence.
          </p>
          <p>
            ALSAfrica actively seeks to link these empowered youth to job opportunities within their communities, working closely with local businesses and organizations to facilitate employment placements. By providing a holistic approach to youth development, ALSA is committed to grooming the next generation to become self-reliant and productive members of society, ultimately contributing to the overall well-being of their communities.
          </p>
        </div>
        <div className="youth-image">
          <img src="/image2.jpg" alt="Youth Empowerment Initiative" /> {/* Change this to your image path */}
        </div>
      </div>
    </div>
  );
};

export default YouthEmpowerment;
