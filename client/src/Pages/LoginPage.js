import React from "react";
import Linebreak from "../Components/Linebreak";
import LoginForm from "../Components/LoginForm/LoginForm";
import SignupForm from "../Components/SignupForm/SignupForm";
import SignupButton from "../Components/SignupButton";
import { useState } from "react";

//prettier-ignore
const LoginPage = ( { onLogin } ) => {
    
  const[showLogin, setShowLogin] = useState(true)

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
  
  return (
  <>
    {/* <h1 className="account-login-header">Account Login</h1>
    {!showLogin ? null : <> <LoginForm onLogin={onLogin} />
    <Linebreak />
      <SignupButton onLogin={onLogin} showLogin={showLogin} setShowLogin={setShowLogin} /> </>}
    */}
      {showLogin ? ( <> <LoginForm /> <SignupButton /> </> )
        : (
          <>
            <SignupForm />
          </>
      )
      }
    
  </>
);

  };

export default LoginPage;

// if signup button is clicked loginForm display to none
