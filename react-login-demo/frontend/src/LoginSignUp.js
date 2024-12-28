import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace with actual authentication logic (e.g., API call)
    if (username === 'user' && password === 'pass') {
      login(); // Assuming AuthContext provides a login function
      navigate('/dashboard'); // Redirect to dashboard upon successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome Back</h2>
      <p style={styles.subHeader}>Log in to access your account</p>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} style={styles.form}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <Link to="/forgot-password" style={styles.link}>Forgot password?</Link>
      <p style={styles.footerText}>
        Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '2rem',
    textAlign: 'center',
    background: 'linear-gradient(to bottom right, #D9CBB3, #8C644C)', // Coffee and food-inspired tones
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '26px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#5A4632', // Rich coffee tone
  },
  subHeader: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#6F5841', // Subtle brown tone
  },
  form: {
    marginTop: '20px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #8C644C', // Coffee-inspired border color
    fontSize: '16px',
    outline: 'none',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.2s',
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    background: '#8C644C', // Deep coffee tone
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  link: {
    display: 'block',
    marginTop: '15px',
    color: '#A47B65', // Soft brown link color
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#6F5841', // Subtle brown tone
  },
};

export default Login1;
