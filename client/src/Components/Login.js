import React from "react";
import clsx from "clsx";
import styles from "../Home.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={clsx(styles.logInPageRootRootRoot)}>
      <div>
        <div className={styles.flexRow}>
          <div className={styles.text1}>NyamaHaven</div>
          <img
            src={`https://file.rendit.io/n/KkIHr5tFv6YWq6zeOXgW.svg`}
            className={styles.image1}
          />
        </div>
        <form>
          <h2>Login to NyamaHaven</h2>
          <label>
            <b>Username:</b>{" "}
          </label>

          <input
            type="text"
            placeholder="Enter Username"
            name="username"></input>

          <label>
            <b> Password:</b>{" "}
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            required></input>
          <button type="submit">Login</button>
          <br></br>
        </form>

        <div className={styles.flexRow1}>
          <div className={styles.text3}>Don’t have an account?</div>
          <div className={styles.signup}>
            <Link to="/signUp">
              <button>Sign up</button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className={clsx(styles.text4)}>NyamaHaven | copyright 2022</h1>
      <div />
    </div>
  );
};
export default Login;
