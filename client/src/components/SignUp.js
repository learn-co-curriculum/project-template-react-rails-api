import { useState } from "react"

function SignUp ({error, setError, setCurrentUser}) {

    const [signUpUsername, setSignUpUsername] = useState("")
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")

    function handleSignUp () {

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
                            <button className="button" type="submit"> Log in </button>
                 </div>
                        <p className="error">{error ? error : null}</p>
            </form>
         </div>
      </div>
    )
}

export default SignUp