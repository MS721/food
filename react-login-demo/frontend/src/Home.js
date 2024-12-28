// src/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Food Havens</h1>
      <Link to="/login">
        <button style={{ padding: '0.5rem 1rem' }}>Login</button>
      </Link>
    </div>
  );
};

export default Home;
