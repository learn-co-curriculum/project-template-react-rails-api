import { useState } from "react";

const SignupButton = ({ onLogin }) => {
  const [showSignupForm, setShowSignupForm] = useState(false);

  function handleSignUp() {
    setShowSignupForm(!showSignupForm);
  }

  // prettier-ignore
  return (
      <div className="signup-div">
        
          <span>
            <p>Don't have an account?</p>
            <button onClick={handleSignUp} className="signup-btn">
              SIGN UP
            </button>
          </span>
        
          
        
      </div>
    );
};

export default SignupButton;
