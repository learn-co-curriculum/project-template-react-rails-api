import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "../Home.module.css";

const SignUP = ({ variant = "default" }) => {
  const [userdata, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
    password_digest: "",
  });

  const handleChange = (e) => {
    
    e.preventDefault();

    setUserData({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };
console.log(userdata)
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });

    // setUserData({
    //   name: "",
    //   username: "",
    //   email: "",
    //   password_digest: "",
    // });
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
              name="name"
              value={userdata.name}
              onChange={handleChange}
            />
            <br />
            <label>userName:</label>
            <br />
            <input
              type="text"
              name="username"
              value={userdata.username}
              onChange={handleChange}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="text"
              name="email"
              value={userdata.email}
              onChange={handleChange}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password_digest"
              value={userdata.password_digest}
              onChange={handleChange}
            />

            <button onClick={() => console.log(userdata)} type="submit">
              CREATE ACCOUNT
            </button>
          </form>
          <h3>
            Already Registered?
            <Link to="/Login">
              <button>LOGIN</button>
            </Link>
          </h3>
        </div>
      </div>
      <div className={clsx(styles.text4)}>NyamaHaven | copyright 2022</div>

      <img
        src={`https://file.rendit.io/n/VKUDdPXOQEW9F1d6KxwA.png`}
        className={clsx(styles.errorBang, {
          [styles.error]: variant === "error",
        })}
      />
    </>
  );
};
export default SignUP;
