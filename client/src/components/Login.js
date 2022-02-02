import React from "react";

export default function Login() {
  return (
    <div id="login" className="rescueportal">
      <form>
        <h3>Log in</h3>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        {/* <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
            </div>
        </div> */}
        <br />

        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
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