import React, { useState } from "react";

export default function Login({ setCurrentUser, portal, setPortal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let portalToRender; // this var is set in the .then() of handleSubmit()

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
          portalToRender = "/applicantportal"
        } else if (user.role === "Admin") {
          portalToRender = "/adminportal/pets"
        } else if (user.role === "Foster") {
          portalToRender = ""
        }
        setPortal(user.role)
      })} else {
        r.json().then((err)=> {
          console.log("Something went wrong w Login component", err)
        })
      }
    })
  }

  return (
    <div id="login" className="rescueportal">
      <form onSubmit={handleSubmit}>
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

        {/* <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
            </div>
        </div> */}
        <br />

        <button type="submit" className="btn btn-dark btn-lg btn-block" href={portalToRender}>Sign in</button> 
        {/* make sure to have the href in the above button able to dynamically render correct portal */}
        <p className="forgot-password text-right">
            <a href="/homeportal/signup">sign up instead?</a>
        </p>
        {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p> */}
      </form>
    </div>
  )
}