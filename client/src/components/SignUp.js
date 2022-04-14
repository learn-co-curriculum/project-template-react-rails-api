import { useState } from "react"
import { useHistory } from "react-router-dom"

function SignUp ({setCurrentUser}) {

    const [signUpUsername, setSignUpUsername] = useState("")
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")
    const [signUpError, setSingUpError] = useState(null)

    const history = useHistory()

    function handleSignUp (e) {
        e.preventDefault()

        fetch("/signup", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: signUpUsername, password: signUpPassword, email: signUpEmail})
        })
        .then(r => r.json())
        .then(data => {
            console.log(data.errors)
            if (data.errors) {
                setSingUpError(data.errors)
                e.target.className="shake"
                setInterval(function() {e.target.className="login-form"}, 500)
            } else {
                setSingUpError(null)
                console.log("Signup Success")
                history.push("/portfolio")
                setCurrentUser(data)
            }
        })
    }

    return (
     <div className="login-container">
         <div className="login-box">
             <form onSubmit={handleSignUp} className="login-form">
                 <div className="login-input-div">
                     <input className="login-input"
                         onChange={(e) => {setSignUpUsername(e.target.value)}}
                         placeholder="Enter username" 
                         type="text" 
                         value={signUpUsername}
                    />
                 </div>
                  <div className="login-input-div">
                     <input className="login-input"
                      onChange={(e) => {setSignUpEmail(e.target.value)}}
                      placeholder="Enter email" 
                      type="text" 
                      value={signUpEmail}
                     />
                        </div>
                 <div className="login-input-div">
                     <input className="login-input"
                      onChange={(e) => {setSignUpPassword(e.target.value)}}
                      placeholder="Enter password" 
                      type="password" 
                      value={signUpPassword}
                     />
                        </div>
                        <div className="login-button-div">
                            <button className="button" type="submit"> Sign Up </button>
                 </div>
                        <p className="error">{signUpError ? signUpError : null}</p>
            </form>
         </div>
      </div>
    )
}

export default SignUp