import React, { useState } from "react";

// prettier-ignore
const SignupForm = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [password, setPassword ] = useState( "" );
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

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
          userPhoto: userPhoto,
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
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          
    <div>
      <label className="name-label">Name</label>
      <input
        className="name-input"
        type="text"
        id="name"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)} />
    </div>

    <div>
      <label className="username-label">Username</label>
      <input
        className="username-signup-input"
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
    </div>
          
    <div>
      <label className="avatar-label">Avatar</label>
        <input
          className="avatar-input"
          type="text"
          id="signup-avatar"
          autoComplete="off"
          value={userPhoto}
          onChange={( e ) => setUserPhoto( e.target.value )} />
    </div>

          
    <div>
      <label className="password-label">Password</label>
      <input
        className="password-signup-input"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
    </div>
          
    <div>
      <label className="password-label">Password Confirmation</label>
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
    <div>
    
    </div>
  </form>
</div>

    )
  };

export default SignupForm;
