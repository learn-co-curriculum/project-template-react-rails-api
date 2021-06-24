import React, { useState } from 'react';
import logo from '../../logo.png';
import { Alert,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                <img src={logo} alt="logo"/>
            </div>
            <Form>
                <FormGroup>
                    <Label for="username" style={{marginRight: "10px"}}>Username: </Label>
                    <Input type="text" name="username"
                    placeholder="username"
                    style={{marginBottom: "5px"}}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password" style={{marginRight: "10px"}}>Password: </Label>
                    <Input type="password" name="password" placeholder="password"
                    style={{marginBottom: "5px"}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                      />
                </FormGroup>
                <FormGroup>
                    <Label for="password" style={{marginRight: "10px"}}>Password Confirmation:</Label>
                    <Input type="password"
                    name="password"
                    id="password_confirmation"
                    placeholder="password"
                    style={{marginBottom: "5px"}}
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="hobbies" style={{marginRight: "10px"}}>Hobbies: </Label>
                    <Input type="text" name="password"
                    placeholder="hobbies"
                    value={hobbies}
                    onChange={(e) => setHobbies(e.target.value)}
                    />
                </FormGroup>
            </Form>
          </div>
          <div className="footer">
            <Button>
            {isLoading ? "Loading..." : "Sign Up"}
            </Button>
            {errors.map((err) => (
        <Alert color="danger" style={{marginTop: "10px"}} key={err}>{err}</Alert>
        ))}
          </div>
        </div>
        </form>
	)
}

export default Register