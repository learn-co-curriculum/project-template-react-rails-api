import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./LoginForm.css";
import { FaUnlock, FaUserAlt, FaChevronRight } from "react-icons/fa";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  function handleLoginResponse(user){
    onLogin(user)
    history.push("/")
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => handleLoginResponse(user));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="username-label">
            <FaUserAlt className="user-icon" /> Username
          </label>
          <input
            className="username-input"
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="password-label">
            <FaUnlock className="lock-icon" /> Password
          </label>
          <input
            className="password-input"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="login-btn">
            Log in
          </button>
        </div>
        <div>
          {errors.map((err) => (
            <div className="login-errors" key={err}>
              {err}
            </div>
          ))}
        </div>
        <div>
          <p className="forgot-password">
            Forgot your password or username?{" "}
            <FaChevronRight className="arrow-right-icon" />
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
