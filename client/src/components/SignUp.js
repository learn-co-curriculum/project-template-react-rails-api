import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };
  const resetForm = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  const form = document.getElementById("form");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        passwordConfirmation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    resetForm();
  };

  return (
    <Row>
      <Col></Col>
      <Col>
        <Form id="form">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>USERNAME</Form.Label>
            <Form.Control
              onChange={handleUserName}
              value={username}
              type="username"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="Please enter your email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              onChange={handlePassword}
              value={password}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>CONFIRM PASSWORD</Form.Label>
            <Form.Control
              onChange={handlePasswordConfirmation}
              value={passwordConfirmation}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default SignUp;
