import React from 'react';
import './slideimage.css'; // Import the CSS for styling and animations

const SlideImage = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <img src="/image1.JPG" alt="Slide 1" />
          <div className="caption">
            <h2 className="heading">Inspiring Excellence</h2>
            <p className="subheading">Empowering students to achieve their goals.</p>
          </div>
        </div>
        <div className="slide">
          <img src="/image2.JPG" alt="Slide 2" />
          <div className="caption">
            <h2 className="heading">Nurturing Future Leaders</h2>
            <p className="subheading">Building a better tomorrow, today.</p>
          </div>
        </div>
        <div className="slide">
          <img src="/image3.JPG" alt="Slide 3" />
          <div className="caption">
            <h2 className="heading">Shaping a Brighter Future</h2>
            <p className="subheading">Education for life and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideImage;
