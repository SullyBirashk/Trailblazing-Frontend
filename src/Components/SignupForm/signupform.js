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

export default SignupForm;
