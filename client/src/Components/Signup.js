import React from "react";
import { useState } from "react";

export default function Signup() {
  
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  
  function handleSubmit() {
    e.preventDefault()

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
    .then(res=>res.json)
  }
  
  //this needs tested
  //console log on values from the onChange to make sure they are as expected
  return (
    <main className="signup-page">
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={()=>setUsername(e.target.value)}></input>
        <label>Email:</label>
        <input type="text" value={email} onChange={()=>setEmail(e.target.value)}></input>
        <label>Password:</label>
        <input type="password" value ={password} onChange={()=>setPassword(e.target.value)}></input>
      </form>
    </main>
  );
}
