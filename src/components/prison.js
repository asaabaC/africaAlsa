import React from 'react';
import './prison.css'; // Import the CSS for styling

const Prison = () => {
  return (
    <div className="prison-container">
      <h1 className="prison-title">Prison Ministry Pillar</h1>
      <div className="prison-content">
        <div className="prison-text">
          <p>
            The Prison Ministry pillar of <strong>ALSAfrica</strong> provides extensive support to both prisoners and their families, addressing their unique challenges. ALSA offers legal assistance to those incarcerated, ensuring they have access to fair representation and justice. In addition to this, the ministry supports the families left behind by providing resources and emotional assistance.
          </p>
          <p>
            A key focus is on the children of prisoners, where ALSAfrica actively lobbies for scholarships to ensure these children can continue their education despite their family circumstances.
          </p>
          <p>
            For prisoners, ALSAfrica ensures they receive adequate nutrition through diet provisions while they are incarcerated. Upon their release, the organization plays a crucial role in reintegration by providing sensitization programs and vocational training to equip them with the necessary skills for a successful return to society.
          </p>
          <p>
            Through these efforts, ALSAfrica helps former prisoners reconnect with their communities, fostering acceptance and reducing recidivism by empowering them to become self-reliant and productive members of society.
          </p>
        </div>
        <div className="prison-image">
          <img src="/image5.jpg" alt="Prison Ministry Initiative" />
        </div>
      </div>
    </div>
  );
};

export default Prison;
