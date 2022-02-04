import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ApplicantSignUp({ setCurrentUser, setPortal }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [dob, setDOB] = useState();
  const [rentOwn, setRentOwn] = useState();
  const [homeType, setHomeType] = useState();
  const [lengthAddress, setLengthAddress] = useState();
  const [yardDesc, setYardDesc] = useState();
  const [children, setChildren] = useState();
  const [petAllergy, setPetAllergy] = useState();
  const [lifestyle, setLifestyle] = useState();
  let currentUserID;

function handleSignUp(e) {
    e.preventDefault();

    // CREATE USER LOGIN 
    fetch("/signup", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        firstName, lastName,
        email, password,
        phone,
        role: "Applicant"
      })
    })
    .then((r) => {
      if (r.ok) {r.json().then(user => {
          currentUserID = user.id
          setCurrentUser(user)
          setPortal("Applicant")
        })
      } else {
        r.json().then((err) => {
          console.log("Something went wrong with the signup", err);
        })
      }
    })

    // CREATE APPLICANT PROFILE
    fetch("/applicants", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        firstName, lastName,
        dob, email, phone,
        rent_own: rentOwn,
        home_type: homeType,
        length_address: lengthAddress,
        yard_description: yardDesc,
        children,
        pet_allergy: petAllergy,
        lifestyle,
        user_id: currentUserID
      })
    })

  }

  return (
      <div id="applicant_signup" className="rescueportal">
        <br/>
        <Modal.Body>
          <Form onSubmit={(e)=> handleSignUp(e)}>
            <h3>Register to Adopt!</h3>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="string" placeholder="Enter First Name" onChange={(e)=> setFirstName(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="string" placeholder="Enter Last Name" onChange={(e)=> setLastName(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="string" placeholder="MM/DD/YYYY" onChange={(e)=> setDOB(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Rent or Own?</Form.Label>
                <Form.Select onChange={(e)=> setRentOwn(e.target.value)}>
                  <option>Choose</option>
                  <option>Rent</option>
                  <option>Own</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Home Type</Form.Label>
                <Form.Select onChange={(e)=> setHomeType(e.target.value)}>
                  <option>Choose</option>
                  <option>Single Family Home</option>
                  <option>Condo</option>
                  <option>Apartment</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Any Pet allergies?</Form.Label>
                <Form.Select onChange={(e)=> setPetAllergy(e.target.value)}>
                  <option>Choose</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Address History</Form.Label>
                <Form.Control type="string" placeholder="Enter how many months you've lived in your current address" onChange={(e)=> setLengthAddress(e.target.value)}/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Do you have children?</Form.Label>
              <Form.Control type="string" placeholder="i.e. age, number of children, etc." onChange={(e)=> setChildren(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Yard Description</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={(e)=> setYardDesc(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>What's your lifestyle?</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={(e)=> setLifestyle(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="string" placeholder="Choose password" onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>

            <br/>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <p className="forgot-password text-right">
            Already registered? <a href="/homeportal/login">Log in</a>
        </p>
          </Form>
        </Modal.Body>
      </div>
  )
}