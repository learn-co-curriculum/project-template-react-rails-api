import React, {useState} from 'react'
import SignUp from './SignUp'

function Login(){
    const [signUpHide, setSignUpHide] = useState(false)
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleLogin(event) {
        setLoginData({...loginData,
            [event.target.name] : event.target.value
        })
    }

    function loginSubmit(){
        const newLogin = {
            username: loginData.username,
            password: loginData.password
        }
        fetch(  {
            method: "",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newLogin)
        })
        .then(response => response.json)
        .then(data => {

        })
    }
    
    return (
        <div>
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input name={username} value={loginData} onChange={handleLogin}></input>
                <input name={password} value={loginData} onChange={handleLogin}></input>
                <button onClick>Login</button>
            </form>
            <SignUp />
            
        </div>
    )
}

export default Login
