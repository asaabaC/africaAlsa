import React, { useEffect, useState } from 'react';
import './dashboard.css'; // Ensure you add the styles below to this CSS file

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [receivedDonations, setReceivedDonations] = useState(new Set());

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/user/api/v1/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          setError('Failed to load users');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError('An error occurred while fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleCall = (contact) => {
    if (contact) {
      window.open(`tel:${contact}`);
    } else {
      alert('No contact number available');
    }
  };

  const handleEmail = (email) => {
    if (email) {
      window.open(`mailto:${email}`);
    } else {
      alert('No email address available');
    }
  };

  const handleDelete = (userId) => {
    // Update this function to include API logic to delete a user.
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== userId));
      alert('User deleted successfully'); // Replace this with server-side confirmation.
    }
  };

  const handleCheckboxChange = (userId) => {
    setReceivedDonations((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(userId)) {
        updatedSet.delete(userId);
      } else {
        updatedSet.add(userId);
      }
      return updatedSet;
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>User Dashboard</h1>
        <p>Manage user interactions and track donations</p>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={receivedDonations.has(user.id)}
                      onChange={() => handleCheckboxChange(user.id)}
                    />
                  </td>
                  <td>{user.name || `${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td>{user.contact || 'N/A'}</td>
                  <td>
                    <button
                      className="action-btn call"
                      onClick={() => handleCall(user.contact)}
                    >
                      Call
                    </button>
                    <button
                      className="action-btn email"
                      onClick={() => handleEmail(user.email)}
                    >
                      Email
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
