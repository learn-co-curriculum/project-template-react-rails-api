import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FosterSignUp({ setCurrentUser, setPortal }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  function handleFosterSignUp(e) {
    e.preventDefault();

    // CREATE USER LOGIN 
    fetch("/signup", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        firstName, lastName,
        email, password,
        phone,
        role: "Foster"
      })
    })
    .then((r) => {
      if (r.ok) {r.json().then(user => {
          setCurrentUser(user);
          setPortal("Foster");
          console.log("Foster POSTED! WOOOO HOOOOO!")
        })
      } else {
        r.json().then((err) => {
          console.log("POST /fosterportal/signup error", err);
        })
      }
    })

  }

  return (
      <div id="foster_signup" className="rescueportal">
        <Modal.Body>
          <Form onSubmit={(e)=> handleFosterSignUp(e)}>
            <h3>Foster Signup!</h3>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="string" placeholder="Enter First Name" onChange={(e)=> setFirstName(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="string" placeholder="Enter Last Name" onChange={(e)=> setLastName(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDOB">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="(###)###-####" onChange={(e)=> setPhone(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>
            </Row>


            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="string" placeholder="Choose password" onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>

            <br/>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <p className="forgot-password text-right">
            Already registered? <a href="/rescueportal/login">Log in</a>
            </p>
          </Form>
        </Modal.Body>
      </div>
  )
}