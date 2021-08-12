import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ setCurrentUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();

//handles input from user and posts to backend
  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      password
    };
    const res = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const userData = await res.json();
    if (userData.id) {
      console.log(userData);
      setCurrentUser(userData);
      history.push("/books");
    } else {
      setErrors(userData.message);
    }
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
