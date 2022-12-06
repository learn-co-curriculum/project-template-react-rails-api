import React, { useState } from "react";

import clsx from "clsx";
import styles from "../Home.module.css";

const SignUP = ({ variant = "default" }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPassword = (e) => {
    setConfPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (password != confPassword) {
      alert("password Not Match");
    } else {
      alert("A form was submitted ");
    }
    e.preventDefault();
    e.form.reset();
  };

  return (
    <>
      <div className={clsx(styles.backgrounImage)}>
        <h1>SIGN UP HERE!</h1>
        <div className="signUpPage">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}>
            <label>FirstName:</label>
            <br />
            <input
              type="text"
              value={firstName}
              required
              onChange={(e) => {
                handleFirstName(e);
              }}
            />
            <br />
            <label>LastName:</label>
            <br />
            <input
              type="text"
              value={lastName}
              required
              onChange={(e) => {
                handleLastName(e);
              }}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="password"
              value={email}
              required
              onChange={(e) => {
                handleEmail(e);
              }}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              value={password}
              required
              onChange={(e) => {
                handlePassword(e);
              }}
            />
            <br />
            <label>Confirm Password:</label>
            <br />
            <input
              type="text"
              value={confPassword}
              required
              onChange={(e) => {
                handleConfPassword(e);
              }}
            />
            <br />
            <input type="submit" value="Create Account" />
          </form>
          <h3>
            Already Registered?
            <button>LOGIN</button>
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