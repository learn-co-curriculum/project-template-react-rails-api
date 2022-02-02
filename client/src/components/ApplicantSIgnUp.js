import React from "react";
import Form from 'react-bootstrap/Form'

export default function ApplicantSignUp() {
  return (
    <div id="applicant_signup" className="rescueportal">

      <Form>
        <h3>Register to Adopt!</h3>

        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
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