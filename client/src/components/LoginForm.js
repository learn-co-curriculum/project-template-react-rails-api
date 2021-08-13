import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();

//handles input from user and posts to backend
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      password
    };
    async function login(){
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      });
      if (res.ok) {
        const userData = await res.json()
        onLogin(userData);
        history.push("/books");
      } else {
        const err = await res.json()
        setErrors(err.errors);
      }
    }
    login()
  }

  //form for users to fill out to create an account
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value="Submit"></input>
        {errors ? errors.map((error) => <div>{error}</div>) : null}
      </form>
    </div>
  );
}

export default LoginForm;
