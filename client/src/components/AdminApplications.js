import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplications({ applications, setApplications }) {
  const [showEditApp, setShowEditApp] = useState(false);
  const [appToUpdate, setAppToUpdate] = useState({id: "", applicant_id: "", pet_id: "", status: "", applicant: {}, pet: {}})

   function editApp(e) {
    // e.preventDefault();
    let petAppObj = {};

    if(e.target[0].value !== appToUpdate.status) {
      petAppObj["status"] = e.target[0].value;
    }

    // console.log("petAppObj", petAppObj)

    // PATCH-ing an empty obj doesn't affect the original record
    fetch(`/pet_applications/${appToUpdate.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(petAppObj)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(app => {
          
          console.log("PATCH /pet_applications success!", app)
        })
      } else {
        r.json().then((err) => {
        console.log("PATCH pet_applications error", err);
      })
      }
    });
  }

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
          Edit {appToUpdate.applicant.firstName} {appToUpdate.applicant.lastName}'s' Application Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => editApp(e)}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Status</Form.Label>
            <Form.Select >
                    <option>{appToUpdate.status}</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </Form.Select>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
      </Modal>
    );
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