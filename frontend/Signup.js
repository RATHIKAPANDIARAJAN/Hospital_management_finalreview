import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');

  
  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleEmailaddressChange = (event) => {
    setEmailaddress(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Firstname:', firstname);
    console.log('Lastname:', lastname);
    console.log('Emailaddress:',emailaddress);
    console.log('Password:', password);
    navigate('/Home')
  };
 

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 id="c">HOSPITAL MANAGEMENT SYSTEM </h2>
        <div className="form-group">
          <label htmlFor="username" id="a">firstname :</label>
          <input
            type="text" placeholder="Enter Username"
            id="username"
            value={firstname}
            onChange={handleFirstnameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" id="a">lastname :</label>
          <input
            type="text" placeholder="Enter lastname"
            id="username"
            value={lastname}
            onChange={handleLastnameChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="username" id="a">Emailaddress :</label>
        <input
          type="text" placeholder="Enter email"
          id="username"
          value={emailaddress}
          onChange={handleEmailaddressChange}
          required
        />
      </div>
        <div className="form-group">
          <label htmlFor="password" id="b">Password :</label>
          <input
            type="password" placeholder="Enter password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className='e'>
        <button type="submit">Signup</button>
        </div>
      
      </form>
    </div>
  );
};

export default Signup;
