import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplicants({ pets, applicants, setApplicants }) {
  const [modalShow, setModalShow] = React.useState(false);

  function AddApplicantModal(props) {
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div id="admin_applicants">
      <h3>Applicants</h3>

      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Applicant
        </Button>

        <AddApplicantModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>

      <Table striped bordered hover>
        <thead>
          <tr>
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