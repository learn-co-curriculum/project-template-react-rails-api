import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Login() {
  
  const [user, setUser] = useState("")  
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [currentUser, setCurrentUser] = useState()

  let history = useHistory();
    
  function handleLogin (e) {
    e.preventDefault()
    
    fetch ('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: user, password: password})
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {setError(data.error)}
        else {
          setError(null)
          console.log("Login Success")
          setCurrentUser(data)
          history.push("/restaurants")
        }
      }) 
  }
  
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div className="login-input-div">
            <label>
                <input
                  onChange={(e) => {setUser(e.target.value)}}
                  placeholder="Enter username"
                  type="text"
                  className="login-input"
                  value = {user}
                />
              </label>
            </div>
            <div className="login-input-div">
              <label>
                <input
                  onChange={(e) => {setPassword(e.target.value)}}
                  placeholder="Enter password"
                  type="password"
                  className="login-input"
                  value = {password}
                />
              </label>
            </div>
            <div className="login-button-div">
              <button 
                type="submit"
                className="button"
              >
                Log in
              </button> 
              <p className="error">{error ? error : null}</p>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login