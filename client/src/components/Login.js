import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login() {
  const search = useLocation().search;
  const error = new URLSearchParams(search).get("error");

  return (
    <div className="form-box">
      <div className="login-box">
        <h1>Login</h1>
        <div className="form-container">
          <form className="login-signup-form" action="/login" method="post">
            <section className="input-form">
              <label>Email:</label>
              <input type="text" name="email" placeholder="  Enter Email" />
            </section>
            <section className="input-form">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="  Enter Password"
              />
            </section>
            <section className="input-form">
              <input className="lg-su-button" type="submit" value="Log in!" />
            </section>
          </form>
          {error ? <div className="error-message">{error}</div> : null}
          {/* {setTimeout(() => {
            error.style.display = "none";
          }, 5000)} */}
        </div>
        <div id="signup-reroute">
          <h4>Don't have an account?</h4>
          <Link className="route-link" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;