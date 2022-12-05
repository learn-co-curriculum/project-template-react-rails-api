import React from "react";
import clsx from "clsx";
import styles from "../NewRootRootRoot1.module.css"

const Login = ({ variant = "default" }) => {

  return (
    <div
      className={clsx(
        styles.logInPageRootRootRoot,
        { [styles.loading]: variant === "loading" },
        { [styles.error]: variant === "error" }
      )}
    >
      <div
        className={clsx(
          styles.flexColumn,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.loginform}>
          <div className={styles.username1}>
            <div className={styles.text2}>Username:</div>
            <div className={styles.whiteRectangle} />
          </div>
          <div className={styles.password3}>
            <div className={styles.text2}>
              Password<div className={styles.password1}>:</div>
            </div>
            <div className={styles.whiteRectangle} />
          </div>
          <div className={styles.login1}>
            <div className={styles.mahoganyText}>Login</div>
          </div>
        </div>
        <div className={styles.flexRow1}>
          <div className={styles.text3}>Don’t have an account?</div>
          <div className={styles.signup}>
            <div className={styles.whiteText}>Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
