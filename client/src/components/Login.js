// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

// import {useState}from "react";
// import Login from "components/Login"
// import Signup from "components.Signup"
const Login = () =>{ 
  return ( 
    <div className="container">

  <div className='row'>
  <div className='col-md-4'>

  <div className="login-card">
    <div className='card'>
      <div className='card-header'>
        <h5 className='card-title text-center'>Yoga Zone</h5>
      </div>
      <div className='card-body'>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input type="text" name='name' required className='form-control' />
            </div>
            <div className='form-group'>
            <label>Address</label>
            <input type="text" required name='address' className='form-control' />
            </div> <div className='form-group'>
            <label>Password</label>
            <input type="text" required name='password' className='form-control' />
            </div> <div className='form-group'>
            <label>Confirm Password</label>
            <input type="text" name='confirm-password' required className='form-control' />
            </div>
             <div className='form-group mt-4 justify-content-right'>
           <button type='submit' className='btn btn-md  btn-block '>Signup</button>
        
            </div> 
        </form> 
      </div>
      <div className='card-footer align-right'>Have an account ?
<button type='submit' className='btn btn-md   btn-block  ' >Login</button>
      </div>
      </div>
          
      </div>
    </div>
      
</div>
</div>
  );
}

export default Login;
