import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

//useHistory hook to redirect user to explore after logging in
export default function Login() {
  
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate()
  const {name, email, password} = formData

  function handleChange(e) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  

  //double check this
  function handleSubmit(e) {
    e.preventDefault()
    const user = {
      name, email, password
    }
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(navigate('/explore'))
    .catch(error => console.log(error))
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
    //display map over errors array
    //set timeout to display errors, then reset state back to empty array, trigger rerender
  );
}
