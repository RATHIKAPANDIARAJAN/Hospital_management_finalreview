import React, { useState } from 'react';
import './home.js';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import { getData } from './api';
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log(formData);
    getData(formData).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
    navigate("/home");
  };
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  // };
  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 id="c">HOSPITAL MANAGEMENT PORTAL</h2>
        <div className="form-group">
          <label htmlFor="username" id="a">Username :</label>
          <input
            type="text" placeholder="Enter Username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
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
        <button type="submit">Login</button>
        </div>
        <div>
        <p className="u"> or </p>
      </div>
      <div>
      <p><a id="i" onClick={handleSignUp}>Signup</a></p>
      </div>
      </form>
    </div>
  );
};

export default Login;
