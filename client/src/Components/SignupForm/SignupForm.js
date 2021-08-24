import React, { useState } from "react";
import { FaTimes, FaUnlock, FaUserAstronaut, FaUserAlt } from "react-icons/fa";

import "./SignupForm.css"
// import UserHomePage from "../../Pages/UserHomePage";

// prettier-ignore
const SignupForm = ({ onLogin, setShowLogin, showLogin }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [password, setPassword ] = useState( "" );
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleExitSignUpForm(){
    setShowLogin(!showLogin)
  }

    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          user_photo: userPhoto,
          password,
          password_confirmation: passwordConfirmation
        }),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => onLogin(user));
        } else {
          resp.json().then((err) => setErrors(err.errors))
        }
      });
    }
    
    // prettier-ignore
    return (
      <div className='signup-form'>
      <FaTimes className='exit-signup-btn' onClick={handleExitSignUpForm}></FaTimes>
      <div>
        <form onSubmit={handleSubmit}>
          
    <div>
      <label id="signup-label"><FaUserAlt id="signupform-icon" /> Name</label>
      <input
        className="name-signup-input"
        type="text"
        id="name"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)} />
    </div>

    <div>
      <label id="signup-label"><FaUserAlt id="signupform-icon" /> Username</label>
      <input
        className="username-signup-input"
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
    </div>
          
    <div>
      <label id="signup-label"><FaUserAstronaut id="signupform-icon" /> Avatar(image URL)</label>
        <input
          className="avatar-input"
          type="text"
          id="signup-avatar"
          autoComplete="off"
          value={userPhoto}
          onChange={( e ) => setUserPhoto( e.target.value )} />
    </div>

          
    <div>
      <label id="signup-label"><FaUnlock id="signupform-icon"/> Password</label><input
        className="password-signup-input"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
    </div>
          
    <div>
      <label id="signup-label"><FaUnlock id="signupform-icon"/>Password Confirmation</label>
        <input
          className="password-confirmation-input"
          type="password"
          id="password-confirmation"
          autoComplete="off"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)} />
    </div>

    <div>
      <button type="submit" className="signup-btn">Sign Up</button>
    </div>
          
    <div>
      {errors.map((err) => (
        <div className="login-errors" key={err}>
          {err}
        </div>
      ))}
    </div>
  </form>
</div>
</div>

    )
  };

export default SignupForm;
