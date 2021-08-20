import React, {useState} from 'react'
import Error from './Error'
import SignUp from './SignUp'

function Login({ setUser }){
    const [showLogin, setShowLogin] = useState(true)
    const [errors, setErrors] = useState([])
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
            if (response.ok) {
                response.json().then((user) => setUser(user));
            } else {
                response.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    return (
        <div>
            { showLogin 
            ? 
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input name='username' value={loginData.username} placeholder="Username" onChange={handleLogin}></input>
                <input name='password' value={loginData.password} placeholder="Password" type="password" onChange={handleLogin}></input>
                <button>Login</button>
                <button onClick={() => setShowLogin(false)}>Create New Account</button>
            </form>
            :
            <SignUp
                setUser = {setUser}
            />
            }
            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}
        </div>
    )
}

export default Login
