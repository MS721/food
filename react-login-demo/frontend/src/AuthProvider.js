import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure react-router-dom is imported

// Create a context for authentication
export const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/dashboard'); // Redirect to dashboard after successful login
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
