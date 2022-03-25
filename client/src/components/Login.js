
import { useState } from 'react';

function Login ({ onLogin }){

    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false)
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [photo, setPhoto] = useState("")
        
    //signup
    function handleSignup(e){
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
              password_confirmation: passwordConfirmation,
              name, 
              age,
              email,
              location,
              photo
            }),
          })
            .then((r) => r.json())
            .then(onLogin);
        }
    
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
          .then((user) => onLogin(user));
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

    const signupBox = (
            <div>
                <form onSubmit={handleSignup}>
                    <input type ="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} placeholder="username"/>
                    <input type ="text"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="password"/>
                    <input type ="text"  value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
                    <input type ="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
                    <input type ="text"  value={age} onChange={(e) => setAge(e.target.value)} placeholder="age"/>
                    <input type ="text"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                    <input type ="text"  value={location} onChange={(e) => setLocation(e.target.value)} placeholder="location"/>
                    <input type ="text"  value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="photo"/>
                    <input type = "submit"></input>
                </form>
            </div>
    )

    return(
        <div>
            <nav>
                <button onClick ={() => setSignup(!signup)}>Signup</button>
                {signup ? signupBox : null}
                <button onClick={() => setLogin(!login)}>Login</button>
                {login ? loginBox : null}
            </nav>
        </div>
    )
}

export default Login