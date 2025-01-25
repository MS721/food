import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      try {
        const response = await fetch(http://localhost:5000/api/ingredients?q=${value});
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for ingredients..."
        style={styles.input}
      />
      {suggestions.length > 0 && (
        <ul style={styles.suggestionsList}>
          {suggestions.map((item) => (
            <li key={item._id} style={styles.suggestionItem}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  suggestionsList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '5px',
    listStyle: 'none',
    padding: 0,
    zIndex: 1000,
  },
  suggestionItem: {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
  },
};

export default SearchBar;