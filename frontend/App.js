import React from 'react';
import './App.css';


import {BrowserRouter as Router,Route,Routes}from "react-router-dom";

import Signup from './Signup';
import Saveinfo from './Saveinfo';
import Home from './home';
import Login from './Login';



function App() {
  return (
    <Router>
   {/*<Link to="/post">Save</Link>
  <Link to="/update">Get</Link>*/}
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route exact path="/post" element={<Saveinfo/>}/>
     
      </Routes>
      </Router>
  );
}
export default App;

