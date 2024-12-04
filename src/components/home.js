import React from 'react';
import './home.css'; // Import the CSS for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to ALSAfrica</h1>
        <p>Empowering communities through sustainable initiatives.</p>
      </header>
      
      <section className="image-gallery">
        <div className="image-item">
          <img src="/image4.JPG" alt="Community Initiative" />
          <div className="overlay">
            <h2>Supporting Local Communities</h2>
            <p>We believe in uplifting those in need.</p>
          </div>
        </div>
        <div className="image-item">
          <img src="/image6.JPG" alt="Education Programs" />
          <div className="overlay">
            <h2>Education for All</h2>
            <p>Ensuring access to quality education.</p>
          </div>
        </div>
        <div className="image-item">
          <img src="/image5.JPG" alt="Health Initiatives" />
          <div className="overlay">
            <h2>Health and Wellbeing</h2>
            <p>Promoting health awareness and care.</p>
          </div>
        </div>
      </section>

          {/* Core Values Section */}
          <section className="core-values-section">
        <h2 className="title">Values We Stand By</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Compassion</h3>
            <p>
            Demonstrating empathy and understanding towards the needs of marginalized communities.
            </p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
            Maintaining honesty, transparency, and accountability in all operations.
            </p>
          </div>
          <div className="value-card">
            <h3> Excellence </h3>
            <p>
            Striving for exceptional performance in all aspects of program delivery.
            </p>
          </div>
          <div className="value-card">
            <h3> Collaboration </h3>
            <p>
            Building strong partnerships with government, communities, and other organizations.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>
            Implementing programs and initiatives that have long-term impact.
            </p>
          </div>
          <div className="value-card">
            <h3>Agility</h3>
            <p>
              Our responsiveness to internal and external factors is with speed and efficiency.
            </p>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <h2>What People Say</h2>
        <div class="testimonial-item">
          <img src="/IMG_3840.jpg" alt="Person 1" class="testimonial-image" />
          <div class="testimonial-content">
            <p>
              "The initiatives by ALSAfrica have transformed our community. We are
              grateful for their support!"
            </p>
            <h3>- Mbabazi Kevin</h3>
          </div>
        </div>
        <div class="testimonial-item">
          <img src="/IMG_3834 - Copy.jpg" alt="Person 2" class="testimonial-image" />
          <div class="testimonial-content">
            <p>
              "Thanks to ALSAfrica, my children have access to education. Their work
              is invaluable!"
            </p>
            <h3>- Asaaba Shallot</h3>
          </div>
        </div>
        <div class="testimonial-item">
          <img src="/IMG_3817.jpg" alt="Person 3" class="testimonial-image" />
          <div class="testimonial-content">
            <p>
              "ALSAfrica's health programs have made a significant difference in our
              lives."
            </p>
            <h3>- Vivian Wembabazi</h3>
          </div>
        </div>
      </section>


      <section className="team-section">
        <div className="team-background">
          <div className="team-overlay">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-description">
              Our dedicated team, is committed to driving change and empowering young mothers, the elderly, impact education in children and youth Empowerment.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;
