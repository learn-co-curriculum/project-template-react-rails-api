import React from 'react'
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Row>
      <Col></Col>
      <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>USERNAME</Form.Label>
        <Form.Control onChange={handleUserName} value={username} type="username" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control onChange={handleEmail} value={email} type="email" placeholder="Please enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control onChange={handlePassword} value={password} type="password" placeholder="Enter password" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    <Col></Col>
    </Row>
    )
}

export default SignUp