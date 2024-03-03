import React, { useState } from 'react';


function SignupForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
}

export default SignupForm;
