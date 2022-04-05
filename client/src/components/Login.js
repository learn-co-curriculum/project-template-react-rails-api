import { useState } from "react"
import { useHistory } from "react-router-dom"

function Login ({ error, setError, setCurrentUser }) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    function handleLogin (e) {
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: user, password: password})
        })
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    setError(data.error) 
                    e.target.className="shake"
                    setInterval( function() {e.target.className="login-form"}, 500)
                } else {
                    setError(null)
                    console.log("Login Success")
                    history.push("/")
                    setCurrentUser(data)
                }
            })

    }


    return(
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleLogin} className="login-form">
                    <div className="login-input-div">
                        <input className="login-input"
                            onChange={(e) => {setUser(e.target.value)}}
                            placeholder="Enter username" 
                            type="text" 
                            value={user}
                        />
                    </div>
                    <div className="login-input-div">
                        <input className="login-input"
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder="Enter password" 
                            type="password" 
                            value={password}
                        />
                    </div>
                    <div className="login-button-div">
                        <button className="button" type="submit"> Log in </button>
                    </div>
                    <p className="error">{error ? error : null}</p>
                </form>
            </div>
        </div>
    )
}

export default Login