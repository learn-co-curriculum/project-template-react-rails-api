import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { PasswordInput, Form } from "@mantine/core";

const LogIn = ({handleLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const newLogin = {
      username: username,
      password: password,
    };

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLogin),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          history.push(`/}`);
          handleLogin(user);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-page-header">Log in</h2>
          <img className="login-image" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="log in below"/>
          <div className="login-form">
          <div>
        <label>Username:        </label>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        ></input>
        </div>
        <br></br>
        <label>Password:        </label>
        <input
          placeholder="Password"
          value={password}
          label="Password"
          type="password"
          description="Password must include at least one letter, number and special character"
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Login</button>
        </div>
      </form>
      {errors ? errors.map((e) => <div>{e[0] + ": " + e[1]}</div>) : null}
    </>
  );
};

export default LogIn;
