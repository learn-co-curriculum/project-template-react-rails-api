import React, { useState } from 'react'
import logo from '../../logo.png';

const Login = ({ onLogin }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		fetch("/login", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({ username, password }),
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
		<div className="header" style={{fontFamily: "Permanent Marker, cursive", fontWeight: "bold"}}>Login</div>
		<div className="content">
			<div className="image">
				<img src={logo} />
			</div>
			<div className="form">
				<div className="form-group">
					<label htmlFor="username" style={{marginRight: "10px"}}>Username: </label>
					<input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{marginBottom: "5px"}}/>
				</div>
				<div className="form-group">
					<label htmlFor="password" style={{marginRight: "10px"}}>Password: </label>
					<input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
			</div>
		  </div>	
		  <div className="footer">
			<button type="submit" className="btn">
			{isLoading ? "Loading..." : "Login"}
			</button>
			{errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
		  </div>
		</div>
		</form>
	)
}

export default Login
