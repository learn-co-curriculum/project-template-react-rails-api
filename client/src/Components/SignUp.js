import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "../Home.module.css";

const SignUP = () => {
  // const [userdata, setUserData] = useState({
  //   name: "",
  //   userName: "",
  //   email: "",
  //   password: "",
  // });
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      username: username,
      email: email,
      password: password,
    };
    fetch("http://localhost:3000/signup", {
      mode: "no-cors",
      crossorigin: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify(formData),
    })
      // .then((resp) => resp.json())
      // .then((data) => console.log(data));
  };

  return (
    <>
      <div className={clsx(styles.backgrounImage)}>
        <h1>SIGN UP HERE!</h1>
        <div className="signUpPage">
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter name"
              name=":user[name]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>userName:</label>
            <br />
            <input
              type="text"
              placeholder="Enter username"
              name=":user[username]"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="text"
              placeholder="Enter email address"
              name=":user[email]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name=":user[password]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">CREATE ACCOUNT</button>
          </form>
          <h3>
            Already Registered?
            <Link to="/Login">
              <button >LOGIN</button>
            </Link>
          </h3>
        </div>
      </div>
      <div className={clsx(styles.text4)}>NyamaHaven | copyright 2022</div>

      <img
        src={`https://file.rendit.io/n/VKUDdPXOQEW9F1d6KxwA.png`}
        className={clsx(styles.errorBang)}
      />
    </>
  );
};
export default SignUP;
