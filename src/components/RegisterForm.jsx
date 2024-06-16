import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { username, password });
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
