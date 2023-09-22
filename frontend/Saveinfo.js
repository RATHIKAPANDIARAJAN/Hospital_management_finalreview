import React, { useState } from 'react'
import axios from 'axios';
import Get from './Getinfo';



export default function Saveinfo() {
  const [username,setusername] = useState('');
  const[name,setname]=useState('');
  const[email,setemail]=useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
  
    username: username,
    name:name,
    email:email
   
     
    
      
    
    }
    console.log(data)
     axios.post(`http://localhost:8216/user`, data)
  
      .then(response => { console.log(response.data) })
      .catch(err => { console.log(err) })
   
    setusername('');
    setname('');
    setemail('');
    
    alert("Submitted")
  }

  return (
    
      <div className='auth-form'>
      <h1>Post User Details</h1>
        <form className="auth-data"  onSubmit={handleSubmit}>
          <label className="add" >Address:</label>
          <input type="text" placeholder='Address' id='cid'  className="auth-input" value={username}
            onChange={(e) => setusername(e.target.value)} />
            <label className="add" >Disease:</label>
             <input type="text" placeholder='Disease' id='cid'  className="auth-input" value={name}
            onChange={(e) => setname(e.target.value)} />
            <label className="add" >Patient name:</label>
             <input type="text" placeholder='patient name' id='cid'  className="auth-input" value={email}
            onChange={(e) => setemail(e.target.value)} />
              

         
            <button type='Submit' className="submit">Submit</button>
        </form>
        
<Get/>
      </div>
)
}
