import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
      ////NEED TO DO ERROR HANDLING AND USER_ID stuff to auth on frontend
    });
  }

  return (
    <div className='login-page'>
    <form className='login-form' onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>

    <p>Have an account?</p>
    <Link to='/login'>
      <button>Login!</button>
    </Link>
    </div>
  )
}

export default Signup