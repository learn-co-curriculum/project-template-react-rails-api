import React from 'react'
import { useState } from 'react'
import logo from '../logo.svg'

function Login() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    <hr class="blockline"></hr>
    <img src={logo} alt="logo" id="login-logo"/>
    <div class="forms">
    {showLogin ?
    <form id="login">
          <h1>Login</h1>
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" name="email"  />
            <label for="password">Password</label> 
            <input type="password" name="password" />
            <input type="submit" value="Login" class="button"/>
            <button onClick={() => setShowLogin(!showLogin)}>Sign up!</button>
          </div>
      </form> :
      <form id="signup">
          <h1>Sign Up</h1>
          <div class="input-field">
            <label for="email">Email</label> 
            <input type="email" name="email" />
            <label for="password">Password</label> 
            <input type="password" name="password" />
            <label for="password">Confirm Password</label> 
            <input type="password" name="password" />
            <input type="submit" value="Sign up" class="button" />
            <p>Already have an account? <button onClick={() => setShowLogin(!showLogin)}>Sign in here</button></p>
          </div>
      </form>
    }
    </div>
  </>
    
  )
}

export default Login