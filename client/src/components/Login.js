import React, {useState} from "react";

function Login() {
  
const [user, setUser] = useState("")  
const [password, setPassword] = useState("")
  
  
  return (
    <div>
      <h1>Login</h1>
      <div className="login-container">
        <div className="login-box">
          <form >
            <div className="login-input-div">
            <label>
                <input
                  type="text"
                  className="login-input"
                />
              </label>
            </div>
            <div className="login-input-div">
              <label>
                <input
                  type="password"
                  className="login-input"
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
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login