import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

import React from 'react'

const LoginContainer = ({ setUser, fetchGlobalPlants }) => {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login-container">
        <h1>Plant App</h1>
        {showLogin ? (
            <div>
                <Login setUser={setUser} fetchGlobalPlants={fetchGlobalPlants}/>
                <p>Don't have an account?</p>
                <Link to='/signup'>
                    <button onClick={() => setShowLogin(false)}>Sign Up!</button>
                </Link>
            </div>
        ) : (
            <div>
                <Signup setUser={setUser} fetchGlobalPlants={fetchGlobalPlants}/>
                <p>Have an account?</p>
                <Link to='/login'>
                    <button onClick={() => setShowLogin(true)}>Login!</button>
                </Link>
            </div>
        )}
    </div>
  )
}

export default LoginContainer