// src/History.js

import React from 'react';

const History = () => {
  const visitedRecipes = [
    { name: 'Spicy Chicken Curry', instructions: 'Step 1: ...', date: '2024-12-18' },
    { name: 'Classic Pasta', instructions: 'Step 1: ...', date: '2024-12-17' },
    { name: 'Chocolate Lava Cake', instructions: 'Step 1: ...', date: '2024-12-16' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dish Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Instructions</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {visitedRecipes.map((recipe, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{recipe.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{recipe.instructions}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{recipe.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
