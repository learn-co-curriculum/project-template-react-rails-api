import React, { useState } from 'react'
import logo from '../../logo.png'

const Register = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        hobbies
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

	return (
		<form onSubmit={handleSubmit}>
		<div className="base-container">
		<div className="header" style={{fontFamily: "Permanent Marker, cursive", fontWeight: "bold"}}>Register</div>
		<div className="content">
			<div className="image">
				<img src={logo} />
			</div>
			<div className="form">
				<div className="form-group">
					<label htmlFor="username" style={{marginRight: "10px"}}>Username: </label>
					<input type="text" name="username" 
					placeholder="username" 
					style={{marginBottom: "5px"}}
					value={username}
          			onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password" style={{marginRight: "10px"}}>Password: </label>
					<input type="password" name="password" placeholder="password" 
					style={{marginBottom: "5px"}}
					value={password}
          			onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
					  />
				</div>
				<div className="form-group">
					<label htmlFor="password" style={{marginRight: "10px"}}>Password Confirmation:</label>
					<input type="password" 
					name="password" 
					id="password_confirmation"
					placeholder="password" 
					style={{marginBottom: "5px"}}
					value={passwordConfirmation}
          			onChange={(e) => setPasswordConfirmation(e.target.value)}
          			autoComplete="current-password"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="hobbies" style={{marginRight: "10px"}}>Hobbies: </label>
					<input type="text" name="password" 
					placeholder="hobbies"
					value={hobbies}
          			onChange={(e) => setHobbies(e.target.value)}
					/>
				</div>
			</div>
		  </div>	
		  <div className="footer">
			<button type="submit" className="btn">
			{isLoading ? "Loading..." : "Sign Up"}
			</button>
			{errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
		  </div>
		</div>
		</form>
	)
}

export default Register