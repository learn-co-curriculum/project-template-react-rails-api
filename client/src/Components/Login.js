import React, {useState} from 'react'

function Login({ setUser }){
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
        fetch("/login",  {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newLogin)
        })
        .then(response => response.json)
        .then(data => {setUser(data)})
    }
    
    return (
        <div>
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input name='username' value={loginData.username} onChange={handleLogin}></input>
                <input name='password' value={loginData.password} onChange={handleLogin}></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
