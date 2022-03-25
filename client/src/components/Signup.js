import React from 'react'
import { useState } from 'react';

function Signup({ onLogin }) {

  const [signup, setSignup] = useState(false)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")
  const [photo, setPhoto] = useState("")

  function handleSignup(e){
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          passwordConfirmation,
          name, 
          age,
          email,
          location,
          photo
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }

    const signupBox = (
      <div>
          <form onSubmit={handleSignup}>
              <input type ="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
              <input type ="text"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
              <input type ="text"  value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
              <input type ="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
              <input type ="text"  value={age} onChange={(e) => setAge(e.target.value)} placeholder="age"/>
              <input type ="text"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
              <input type ="text"  value={location} onChange={(e) => setLocation(e.target.value)} placeholder="location"/>
              <input type ="text"  value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="photo"/>
              <input type = "submit"></input>
          </form>
      </div>
    )
    
return (
  <div>
      <nav>
          <button onClick ={() => setSignup(!signup)}>Signup</button>
          {signup ? signupBox : null}
      </nav>
  </div>
)
}

export default Signup