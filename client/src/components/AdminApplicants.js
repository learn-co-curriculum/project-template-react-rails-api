import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplicants({ pets, applicants, setApplicants }) {
  const [showEditApplicant, setShowEditApplicant] = useState(false);

  //APPLICANT SHOULD BE EDIT ONLY!
  function editApplicant(e, a) {
    console.log("editApplicant() has been invoked!");
  }

  function EditApplicantModal(props) {
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
          Edit Applicant
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => editApplicant(e)}>
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

  return (
    <div id="admin_applicants">
      <h3>Applicants</h3>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Edit</th>
            <th>id</th>
            <th>Approved?</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Rent or Own?</th>
            <th>Home Type</th>
            <th># Months at Address</th>
            <th>Yard Description</th>
            <th>Children?</th>
            <th>Pet Allergies?</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(a => (
            <tr>
              <td><a onClick={(e, a)=>{setShowEditApplicant(e, a)}}>Edit</a></td>
              <td>{a.id}</td>
              <td>{a.approved ? "Yes" : "No"}</td>
              <td>{a.firstName}</td>
              <td>{a.lastName}</td>
              <td>{a.dob}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.rent_own}</td>
              <td>{a.home_type}</td>
              <td>{a.length_address}</td>
              <td>{a.yard_description}</td>
              <td>{a.children}</td>
              <td>{a.pet_allergy}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}