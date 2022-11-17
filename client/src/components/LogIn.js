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
          <h2 className="page-header">Log in</h2>
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
