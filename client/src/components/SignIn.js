import React, { useState } from "react";
// alexand
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function SignIn( {setUser} ) {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setUserName("");
    setPassword("");
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
            alert("You have successfully logged in!");
            setUser(user);
            navigate("/");
        });

      } else {
        r.json().then((err) => {
            console.log(err);
            setErrors(err.errors);
        });
      }
    });
    resetForm();
  }

  return (
    <Row>
      <Col></Col>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block="true" size="lg" type="submit">
            Login
          </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default SignIn;
