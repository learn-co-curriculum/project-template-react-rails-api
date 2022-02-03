import React, { useState } from "react";
import Form from 'react-bootstrap/Form'

export default function ApplicantSignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  function handleSetFirstName(e) {
    e.preventDefault();
    setFirstName(e.target.value);
  }
  function handleSetLastName(e) {
    e.preventDefault();
    setLastName(e.target.value);
  }
  function handleSetEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function handleSetPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }
  function handleSetPhone(e) {
    e.preventDefault();
    setPhone(e.target.value);
  }

  function handleSignUp(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: `${firstName}${lastName}`,
        email,
        password,
        phone,
        type: "Applicant"
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // render components based off of user's type
          console.log("USER'S TYPE", user)
        })
      } else {
        r.json().then((res) => {
          console.log("Something went wrong with the signup", res.errors);
        })
      }
    })
  }

  return (
    <div id="applicant_signup" className="rescueportal">

      <Form onSubmit={handleSignUp}>
        <h3>Register to Adopt!</h3>

        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" onChange={handleSetFirstName}/>
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" onChange={handleSetLastName}/>
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email"  onChange={handleSetEmail}/>
        </div>

        <div className="form-group">
            <label>Phone</label>
            <input type="email" className="form-control" placeholder="Enter email"  onChange={handleSetPhone}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={handleSetPassword}/>
        </div>

        <br />
        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        <p className="forgot-password text-right">
            Already registered <a href="/homeportal/login">log in?</a>
        </p>
      </Form>
    </div>
  )
}