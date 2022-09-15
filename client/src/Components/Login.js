import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [errors, setErrors] = useState([])
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
    .catch(error => setErrors(error))
  }


//I would do this in css with flex. You can put all the inputs in a div, give that div an id or class name, 
//and then set display to flex and flex-direction to column.
//or try this css:
// .form-part label {
//   display: block;
//   margin: 10px 0 0;
// }
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
      {errors ? errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
    </main>
    //display map over errors array
    //set timeout to display errors, then reset state back to empty array, trigger rerender
    
  );
}
