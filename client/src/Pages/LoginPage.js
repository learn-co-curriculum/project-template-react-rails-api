import React from "react";
import Linebreak from "../Components/Linebreak";
import LoginForm from "../Components/LoginForm/LoginForm";
import SignupForm from "../Components/SignupForm/SignupForm";
import SignupButton from "../Components/SignupButton";
import { useState } from "react";

//prettier-ignore
const LoginPage = ( { onLogin } ) => {
    
  const[showLogin, setShowLogin] = useState(true)
  
  return (
    <>
      {showLogin ? ( <div> <LoginForm /> <p>Don't have an account?</p> <button onClick={() => setShowLogin(!showLogin)}>Sign Up</button> </div> )
        : (
          <div className='sign-form-div'>
            <SignupForm />
          </div>
      )
    }
  </>
);

};

export default LoginPage;

// if signup button is clicked loginForm display to none


// working!!!
// return (
  //   <>
  //     <h1 className="account-login-header">Account Login</h1>
  //       {showLogin ? (null) : (null)}
  //     <LoginForm onLogin={onLogin} />
  //     <Linebreak />
  //     <SignupButton onLogin={onLogin} />
  //   </>
  // );
  // {/* <h1 className="account-login-header">Account Login</h1>
  // {!showLogin ? null : <> <LoginForm onLogin={onLogin} />
  // <Linebreak />
  // <SignupButton onLogin={onLogin} showLogin={showLogin} setShowLogin={setShowLogin} /> </>}
  // */}