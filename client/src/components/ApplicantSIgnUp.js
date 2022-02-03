import React, { useState } from "react";
import Form from 'react-bootstrap/Form'

export default function ApplicantSignUp({ setCurrentUser }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("Applicant");
  const [phone, setPhone] = useState();

  // const [login, setLogin] = useState();
  const [errors, setErrors] = useState();

  function handleSignUp(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        role,
        phone
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log("USER", user)
          // set currentUser
          setCurrentUser(user)
          // render applicant component here w current user
        })
      } else {
        r.json().then((err) => {
          console.log("Something went wrong with the signup", err);
          // setErrors(Object.entries(err.error).flat())
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
            <input type="text" className="form-control" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Phone</label>
            <input type="phone" className="form-control" placeholder="Enter phone"  onChange={(e) => setPhone(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <br />
        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        <p className="forgot-password text-right">
            Already registered? <a href="/homeportal/login">log in</a>
        </p>
      </Form>
    </div>
  )
}