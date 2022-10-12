
import React, {useState} from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function LoginForm({onLogin}) {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
     }

    function handleClick(path){
        navigate(path)
    }
return (
    <form onSubmit={handleSubmit}>
      <div className="main">
        <div>
          <div>
            <h1>Login</h1>
            <div>
              <input type="text" placeholder="user name" className="name" />
            </div>
            <br />
            <div>
              <input type="text" placeholder="password" className="name" />
            </div>
            <br />
            <div>
            <button type="button" className="button-1" onClick={() => handleClick("/home")}>
              Login
            </button>
            </div>
            
          </div>
          <div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
