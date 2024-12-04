import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './outdonors.css';

const Outdonar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    age: '',
    contact: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/user/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Check if user is an admin
        if (data.user.is_admin) {
          // Redirect admin to the dashboard
          navigate('/dashboard');
        } else {
          // Show a success message for other users
          setMessage('We shall give you feedback via your email.');
          setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
        }
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Error submitting form. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="outdonar-container">
      <h1>Donate to Us</h1>
      <form onSubmit={handleSubmit} className="outdonar-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Donate</button>
      </form>

      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default Outdonar;