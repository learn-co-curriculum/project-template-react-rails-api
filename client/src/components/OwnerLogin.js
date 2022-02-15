import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
console.log(email)
console.log(password)
console.log(passwordConfirmation)
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
  }
  return (
    <div>
      {/* <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input 
      type="email" 
      class="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      placeholder="Enter email"
      value={email}    
      onChange={(e) => setEmail(e.target.value)}
    />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label 
      for="exampleInputPassword1">
        Password
    </label>
    <input 
      type="password" 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <input 
      type="password" 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="Confirm Password"
      value={passwordConfirmation}
      onChange={(e) => setPasswordConfirmation(e.target.value)}
    />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"       onChange={(e) => setEmail(e.target.value)}
/>
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
    </div>
  )
}

export default OwnerLogin