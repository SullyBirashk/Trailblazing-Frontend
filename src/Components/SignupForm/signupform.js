import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
}

const handleChange = (e) => {
  setUserData({...userData, [e.target.name]: e.target.value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/v1/users', {
      user: userData
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
return (
  <form onSubmit={handleSubmit}>
     <h2>Sign Up</h2>
    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
    <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} required />
    <button type="submit">Sign Up</button>
  </form>
);


export default SignupForm;
