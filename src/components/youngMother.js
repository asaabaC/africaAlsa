import React from 'react';
import './youngMother.css'; // Import the CSS for styling

const YoungMothers = () => {
  return (
    <div className="young-mothers-container">
      <h1 className="young-mothers-title">Young Mothers Pillar</h1>
      <div className="young-mothers-content">
        <div className="young-mothers-text">
          <p>
            The Young Mothers pillar of <strong>ALSAfrica</strong> is dedicated to providing comprehensive support to young girls under the age of 17 who find themselves in vulnerable situations due to early motherhood. ALSA offers a range of services, including counseling to help them navigate emotional challenges, clothing to ensure they have basic necessities, and medical care for both the mother and her child, ensuring their health and well-being. Additionally, food provisions are made to alleviate the burden of basic sustenance.
          </p>
          <p>
            ALSAfrica also emphasizes equipping these young mothers with practical skills training, empowering them to become financially independent and productive members of their communities. For those with the desire and determination to continue their education, ALSA creates opportunities for further studies, offering them a chance to rebuild their futures through learning.
          </p>
          <p>
            However, before a young mother can benefit from these services, a rigorous selection process is conducted. The local LC1 and a specially appointed community committee must verify and approve that the individual is truly eligible, confirming her vulnerability and need for assistance. This ensures that the support reaches the most deserving and in-need young mothers.
          </p>
          <p>
            The goal of this pillar is not only to provide immediate relief but also to nurture long-term independence and well-being, giving young mothers the tools they need to overcome their circumstances and provide a better future for themselves and their children.
          </p>
        </div>
        <div className="young-mothers-image">
          {/* Reference the image from the public folder */}
          <img src="/image9.jpg" alt="Young Mothers Initiative" />
        </div>
      </div>
    </div>
  );
};

export default YoungMothers;
