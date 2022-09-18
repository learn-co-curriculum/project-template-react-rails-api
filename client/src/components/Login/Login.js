import React, { useState } from "react";

function Login({ onLogin }) {

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
              "Access-Control-Allow-Headers": "origin",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailAddress, password }),
          })
          .then((response) => {
            setIsLoading(false)
            if (response.ok) {
                response.json().then((user) => onLogin(user))
            } else {
                response.json().then((err) => setErrors(err.errors));
            }
          })

    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Email </label>
                <input
                    type="text"
                    id="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                ></input>
                <br/>
                <label>Password </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br/>
                <button type="submit">Login</button>
                <br/>
                <h6>If you are unable to enter, please contact your manager immediatelly (000-111-2222)</h6>               
            </form>
        </>

    )
    
}

export default Login;