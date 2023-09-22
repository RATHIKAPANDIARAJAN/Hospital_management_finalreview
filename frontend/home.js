import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Login from './Login';

import { useNavigate } from 'react-router-dom';
const Home = () => {
  const history=useNavigate();
  const handleLogin=()=>{
  history("/post");
  }
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/post">Patient details</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/">Login</a></li>
            <li><a href='/signup'>Signup</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h1>Welcome to hospital Management portal</h1>
          
          <a href="#" className="button" onClick={handleLogin}>PATIENT DETAILS</a>
          
        
          
        </section>
        
        
      </main>

    </div>
  );
};

export default Home;