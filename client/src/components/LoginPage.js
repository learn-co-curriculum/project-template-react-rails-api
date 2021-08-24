import { useState } from "react";
import React from 'react';


function LoginPage({setLogin}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState('')
    const [errrors, setErrors] = useState ('')

    function onSubmit(e){
        const login = {
            username,
            password
        }
        let API_PATH 
        loggedIn?API_PATH = 'session' : API_PATH = "users"
        fetch(`http://localhost:3000/dishes/${API_PATH}`, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(login)
        })
        .then(res => res.json())
        .then(json => {
            if(json.error){
                setErrors(json.error)
            }else {
                setLogin(json)
            }
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <label>
                Username
                <input type="text" value={username} onChange={(e) => setUsername(e.targer.value)}/>
            </label>
            <label>
                Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Sign up to acess Website!"/>
            <input type="submit" value="Login" onClick={()=> setLoggedIn(true)}/>
            </form>
        </div>
    )
}

export default LoginPage;