import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Login({ setCurrentUser, portal, setPortal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState([]);

  let endpointToRender; // this var is set in the .then() of handleSubmit()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then((r) => {
      if (r.ok) {r.json().then(user => {
        setCurrentUser(user)
        if (user.role === "Applicant") {
          endpointToRender = "/applicantportal"
        } else if (user.role === "Admin") {
          endpointToRender = "/adminportal/pets"
        } else if (user.role === "Foster") {
          endpointToRender = "/fosterportal/pets"
        } 
        setPortal(user.role)
        // below redirects user to specified url
        window.location.href = `http://localhost:4000${endpointToRender}`;
      })} else {
        r.json().then((err)=> {
          console.log("Something went wrong w Login component", err)
          setErr(err.errors);
        })
      }
    })
  }

  return (
    <div id="login" className="rescueportal">
      <form id="loginForm" onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <div className="form-group">
            <label>Email</label>
            <input type="email" 
                className="form-control" 
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}    
            />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div id="loginErrors">
            {err}
        </div>
        <br />

        <Button 
          class="btn btn-large" 
          style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
          type="submit" 
        >Sign in</Button> 
        <p id="linkSignUpInstead">
            <a href="/homeportal/signup">sign up instead?</a>
        </p>
      </form>
    </div>
  )
}