import React, { useState } from "react";
import clsx from "clsx";
import styles from "../Home.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => Login(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
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
                
        <form onSubmit={handleSubmit}>
                    <h2>Login to NyamaHaven</h2>
                    
          <label>
                        <b>Username:</b>           
          </label>
                    
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Username"
            name="username"></input>
          <label>
            <b> Password:</b>{" "}
          </label>
                    
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            name="password"
            required></input>
                   
          <Link to="/">
            <button type="submit">Login</button>
          </Link>
                      <br></br>
                    
          <div>
                    
            <div variant="fill" color="primary" type="submit">
                        {isLoading ? "Loading..." : "Login"}
                      
            </div>
                  
          </div>
                
          <div>
                    
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
                  {" "}
          </div>
                
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
