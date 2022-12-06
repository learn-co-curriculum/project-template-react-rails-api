import React from "react";
import styles from  '../Home.module.css'
import { Link } from 'react-router-dom'

function Login(){
  return(
    <form className="container">
      <p><b>Login to NyamaHaven</b></p>
      <label for='username'><b>Username :</b></label>
      <input type='text' placeholder="Enter Username" name="username"></input>

      <label for='password'> Password</label>
      <input type='password' placeholder='Enter password' name='password' required></input>
      <button type='submit'>Login</button>
      <br></br>
      <span>Don't have an Account?</span>
      <Link to = '/signUP'><button> Sign Up</button></Link>
    </form>
  )

}
export default Login
