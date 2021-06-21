import React, {useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import './App.css';
import axios from 'axios';

require('react-dom');


const clientId = process.REACT_APP_GOOGLE_CLIENT_ID


const GLogin = () => {
  window.React2 = require('react');
console.log(window.React1 === window.React2);
    const [setError] = useState(null);
    // const onSuccess = (res) => {
    //   console.log('[Login Success] currentUser:', res.profileObj);
    // }
  
    // const onFailure = (res) => {
    //   console.log('[Login Failure] res:', res);
    // }

    const handleLogin = async googleData => {
      const response = await axios
      .post(`http://localhost:3000/auth/google/callback`, {user: googleData}, {withCredentials: true})
      .catch((err) => { 
        if (err && err.response) setError(err.response.data.message);
      });
      if (response){
        console.log(response)
      }
      }

  return (
      <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
      />
      </div>
    );
  }
export default GLogin;
