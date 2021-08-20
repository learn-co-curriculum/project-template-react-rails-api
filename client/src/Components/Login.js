import React, { useState } from 'react'

const Login = ({ setErrors, setUser, handleShowLoginClearErrors, setIsLoading }) => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleLogin(event) {
        setLoginData({...loginData,
            [event.target.name] : event.target.value
        })
    }

    function loginSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        const newLogin = {
            username: loginData.username,
            password: loginData.password
        }
        fetch("/login",  {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newLogin)
        }).then((response) => {
            setIsLoading(false)
            if (response.ok) {
                response.json().then((user) => setUser(user));
            } else {
                response.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    return (
        <div>
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input name='username' value={loginData.username} placeholder="Username" onChange={handleLogin}></input>
                <input name='password' value={loginData.password} placeholder="Password" type="password" onChange={handleLogin}></input>
                <button>Login</button>
                <button onClick={handleShowLoginClearErrors}>Create New Account</button>
            </form>
        </div>
    )
}

export default Login
