import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
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
          setCurrentUser(user);
          setPortal("Applicant");

          let userID = user.id

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
                approved: false,
                user_id: userID
              })
            })
            .then((r) => {
              if (r.ok) {r.json().then(applicant => {
                console.log("APPLICANT POSTED OK", applicant)
                let appID = applicant.id

                // UPDATE USER PROFILE W APPLICANT ID
                fetch(`/users/${userID}`, {
                  method: "PATCH",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                    applicant_id: appID
                  })
                })
                .then((r) => {
                  if (r.ok){r.json().then(user => {
                    console.log("PATCH user's applicant_id success", user)
                  })
                  } else {
                    r.json().then((err) => {
                      console.log("PATCH user's applicant_id error", err)
                    })
                  }
                })

                // UPDATE APPLICANT'S USER_ID
                fetch(`/applicants/${appID}`, {
                  method: "PATCH", 
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                    user_id: userID
                  })
                })
                .then((r) => {
                  if (r.ok) {r.json().then(applicant => {
                    console.log("Applicant's user_id updated!")
                  })

                  } else {
                    console.log("Applicant's user_id update failed in SignUp")
                  }
                })

                })
              } else {
                r.json().then((err) => {
                  console.log("POST applicants error", err);
                })
              }
            })

        })
      } else {
        r.json().then((err) => {
          console.log("POST signup error", err);
        })
      }
    })

  }


  return (
      <div id="applicant_signup">
        <br/>
        <Modal.Body>
          <Form onSubmit={(e)=> handleSignUp(e)} id="signupForm">
            <h3>Register to Adopt!</h3>
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
                <Form.Label>DOB</Form.Label>
                <Form.Control type="string" placeholder="MM/DD/YYYY" onChange={(e)=> setDOB(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridRentOwn">
                <Form.Label>Rent or Own?</Form.Label>
                <Form.Select onChange={(e)=> setRentOwn(e.target.value)}>
                  <option>Choose</option>
                  <option>Rent</option>
                  <option>Own</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHomeType">
                <Form.Label>Home Type</Form.Label>
                <Form.Select onChange={(e)=> setHomeType(e.target.value)}>
                  <option>Choose</option>
                  <option>Single Family Home</option>
                  <option>Condo</option>
                  <option>Apartment</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPetAllergy">
                <Form.Label>Any Pet allergies?</Form.Label>
                <Form.Select onChange={(e)=> setPetAllergy(e.target.value)}>
                  <option>Choose</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddressHistory">
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

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="string" placeholder="Choose password" onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>

            <br/>

            <Button class="btn btn-large" style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}} type="submit">
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