import React, { useState } from 'react';


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

export default SignupForm;
