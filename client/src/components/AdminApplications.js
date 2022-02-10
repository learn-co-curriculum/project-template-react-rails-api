import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplications({ applications, setApplications }) {
  const [showEditApp, setShowEditApp] = useState(false);
  const [appToUpdate, setAppToUpdate] = useState({})

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
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Status</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          
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
    
    // need to get record by applicant_id and not id! *see controller*
    // fetch("/pet_applications", {
    //   method: "PATCH",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({
    //     pet_id,
    //     applicant_id,
    //     applicant_email,
    //     status
    //   })
    // })
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then(app => {
          
    //       console.log("PATCH /fosters pet_applications!", app)
    //     })
    //   } else {
    //     r.json().then((err) => {
    //     console.log("PATCH pet_applications error", err);
    //   })
    //   }
    // });
  }

  function openEditAppModal(app) {
    setAppToUpdate(app);
    setShowEditApp(true);
  }

  return (
    <div id="admin_fosters">
      <h3>Pet Applications</h3>
      <Table striped bordered hover responsive>
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
                <Button onClick={() => openEditAppModal(a)}>
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