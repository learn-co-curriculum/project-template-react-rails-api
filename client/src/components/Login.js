import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // https://learning.flatironschool.com/courses/4552/pages/authenticating-users?module_item_id=346173

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username }),
    // })
    //   .then((r) => r.json())
    //   .then((user) => onLogin(user));
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