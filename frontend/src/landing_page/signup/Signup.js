import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '', email: '', password: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3002/api/auth/register', formData);
      if (res.status === 201) {
        alert('Signup successful!');
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data || "Signup failed");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} placeholder="Username" required /><br />
        <input name="email" type="email" onChange={handleChange} placeholder="Email" required /><br />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

