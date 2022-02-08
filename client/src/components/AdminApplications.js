import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplications({ applications, setApplications }) {
  const [showEditApp, setShowEditApp] = useState(false);
  const [pet_id, setPetID] = useState();
  const [applicant_id, setApplicantID] = useState();
  const [applicant_email, setApplicantEmail] = useState();
  const [status, setStatus] = useState("Submitted");

  // function defaultValues(foster) {
  //   console.log("defaultValues() has been invoked!", foster)
  //   // setFirstName(foster.first_name)
  //   // setLastName(foster.last_name)
  //   // setEmail(foster.email)
  //   // setPhone(foster.phone)
  //   // console.log(first_name, last_name, email, phone)
  // }

  function EditAppModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Application
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => editApp(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="string" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="string" placeholder="Enter last name" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="Enter phone" />
            </Form.Group>
          </Row>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    );
  }

  function editApp(e) {
    e.preventDefault();
    
    fetch("/pet_applications", {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        pet_id,
        applicant_id,
        applicant_email,
        status
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(app => {
          
          console.log("PATCH /fosters pet_applications!", app)
        })
      } else {
        r.json().then((err) => {
        console.log("PATCH pet_applications error", err);
      })
      }
    });
  }

  return (
    <div id="admin_fosters">
      <h3>Pet Applications</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Edit</th>
            <th>id</th>
            <th>Status</th>
            <th>Pet</th>
            <th>Applicant</th>
            <th>Applicant Approved?</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(a => (
            <tr>
              <td>
                <Button onClick={() => setShowEditApp(true)}>
                  Edit
                </Button>

                <EditAppModal
                  show={showEditApp}
                  // onShow={(f) => defaultValues(f)}
                  onHide={() => setShowEditApp(false)}
                />
              </td>
              <td>{a.id}</td>
              <td><div contenteditable="true">{a.status}</div></td>
              <td>{a.pet.name}</td>
              <td>{a.applicant.firstName} {a.applicant.lastName}</td>
              <td>{a.applicant.approved ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}