// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import { Link } from 'react-router-dom'

function Signup() {



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

<h6 className='alert alert-info rounded-0'>Please create your user account</h6>
      <div className='card-body'>
        <form>
       
          <div className='form-group'>
            <label>Name</label>
            <input type="text" name='name' required className='form-control' />
            </div>
             <div className='form-group'>
            <label>Username</label>
            <input type="text" name='username' required className='form-control' />
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
           <button onSubmit={''} className='btn btn-md  btn-block '>SignUp</button>
        
            </div> 
        </form> 
      </div>
      <div className='card-footer align-right'>Have an account ?

        <button type="button" className={"btn btn-secondary"}>
            Login
        </button>
      </div>
      </div>
          
      </div>
    </div>
      
</div>
</div>
  );
}

export default Signup;
