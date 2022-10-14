import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

// import {useState}from "react";
// import Login from "components/Login"
// import Signup from "components.Signup"

const Login = (onLogin) =>{ 
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [showLogin, setShowLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  

  return ( 
    <div className="container">

  <div className='row'>
  <div className='col-md-8' style={{
    backgroundColor:"#dede",
    opacity:"0.1",
backgroundImage:"url(https://cdn.vectorstock.com/i/1000x1000/95/06/plus-size-black-curvy-lady-at-yoga-class-vector-32749506.webp)"  }}>
<h1 style={{fontWeight:"900",padding:"30px"}} >YOGA ZONE</h1>

  </div>
  <div className='col-md-4'>

  <div className="login-card"> 

    <div className='card'>

<h6 className='alert alert-info rounded-0'>Please login to start your session</h6>
      <div className='card-body'>
        <form  onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input type="text" id='username' onChange={(e) => setUsername(e.target.value)}   required className='form-control' />
            </div>
             <div className='form-group'>
            <label>Password</label>
            <input type="text" required name='password' onChange={(e) => setPassword(e.target.value)}  className='form-control' />
            </div>
             <div className='form-group mt-4 justify-content-right'>
           <button type='submit' className='btn btn-md  btn-block '>{isLoading ? "Loading..." : "Login"}</button>
        
            </div> 
        </form> 
        <div>
            {errors.map((err) => (
            <div className='alert alert-danger'key={err}>{err}</div>
            ))}
            </div>


      </div>
    
      </div>


          
      </div>
    </div>
 
</div>
</div>
  );
}

export default Login;
