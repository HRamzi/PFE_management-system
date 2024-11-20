// client/src/components/Login.js
import React, { useState } from 'react';
import axios from './axios';
import { Navigate } from 'react-router-dom';  // Updated to Navigate for redirection

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Step 1: Get CSRF token
      await axios.get('sanctum/csrf-cookie');

      // Step 2: Send login request
      const response = await axios.post('login', {
        email,
        password,
        remember,
      });

      const { user, role } = response.data;

      // Save user and role to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', role);

      // Redirect to the dashboard
      setRedirect(true);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  );
};

export default Login;