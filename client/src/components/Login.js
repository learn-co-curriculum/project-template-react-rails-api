import React,{useState} from "react";
import LoginForm from "./LoginForm"
import Signup from "./Signup"


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
     
      {showLogin ? (
        <div className= "main">
          <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account?
          
            <button type="button"  className="btn btn-link" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
         
          </p>
        </div>
      ) : (
        <div className= "main">
          <Signup onLogin={onLogin} />
          <p>
            Already have an account?
            <button type="button" className="btn btn-link"  onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
}



export default Login;