import React from "react";
import { useState, useHistory } from "react";

//useHistory hook to redirect user to explore after logging in
export default function Login() {
  
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory()
  const {name, email, password} = formData

  function handleChange(e) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  

  //double check this
  function handleSubmit() {
    e.preventDefault()
    user = {
      name, email, password
    }
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(history.push('/explore'))
  }



  return (
    <main className="login-page">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleChange}/>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange}/>
      </form>
    </main>
  );
}
