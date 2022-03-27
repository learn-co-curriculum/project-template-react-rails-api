
import { useState } from 'react';

function Login ({ onLogin, fetchProfiles }){

    const [login, setLogin] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

        // login
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => r.json())
          .then((user) => (user.username ? onLogin(user) : null));
      }
    
    const loginBox = (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                         <input type = "text" value={username}  onChange={(e) => setUserName(e.target.value)} placeholder="Username"></input>
                         <input type = "text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                            <input type = "submit"></input>
                    </div>
                </form>
             </div>
            
        </div>
    )



    return(
        <div>
            <nav>
                <button onClick={() => setLogin(!login)}>Login</button>
                {login ? loginBox : null}
            </nav>
        </div>
    )
}

export default Login