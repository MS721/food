// src/MyProfile.js

import React from 'react';

const MyProfile = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '50px auto', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '10px', 
      backgroundColor: '#f8f5f2', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      color: '#5a4636'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '20px', 
        fontSize: '1.8em', 
        color: '#a6895a'
      }}>My Profile</h2>
      <div style={{ 
        lineHeight: '1.8', 
        fontSize: '1.1em' 
      }}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Favorite Cuisine:</strong> Italian</p>
        <p><strong>Membership Level:</strong> Gold</p>
      </div>
    </div>
  );
};

export default MyProfile;
