import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminApplications({ applications, setApplications }) {
  const [showEditApp, setShowEditApp] = useState(false);
  const [appToUpdate, setAppToUpdate] = useState({id: "", applicant_id: "", pet_id: "", status: "", applicant: {}, pet: {}})

  function editApp(e) {
    let petAppObj = {};

    if(e.target[0].value === "") {
      petAppObj["status"] = appToUpdate.status;
    } else if (e.target[0].value !== appToUpdate.status) {
      petAppObj["status"] = e.target[0].value;
    }

    console.log("petAppObj status", typeof petAppObj.status, petAppObj.status)

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
          Edit {appToUpdate.applicant.firstName} {appToUpdate.applicant.lastName}'s' Application Status for {appToUpdate.pet.name}, {appToUpdate.pet.breed}
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
          
          <br />
          
          <Button type="submit"
            class="btn btn-large" 
            style={{ backgroundColor: "#f4805c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
          >
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
    <div id="admin_applications">
      <h3 className="pageName">Pet Applications</h3>
      {/* <div> */}
      <table className="dataTable">
        {/* <thead> */}
          <tr className="dataTableHeader">
            <th className="dataTableHeader">Edit</th>
            <th className="dataTableHeader">id</th>
            <th className="dataTableHeader">Status</th>
            <th className="dataTableHeader">Pet</th>
            <th className="dataTableHeader">Applicant</th>
            <th className="dataTableHeader">Applicant Approved?</th>
          </tr>
        {/* </thead> */}
        {/* <tbody> */}
          {applications.map(a => (
            <tr key={a.id} className="dataTable">
              <td className="dataTable">
                <Button onClick={() => openEditAppModal(a)}
                  class="btn btn-large"
                  style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
                >
                  Edit
                </Button>

                <EditAppModal
                  show={showEditApp}
                  onHide={() => setShowEditApp(false)}
                />
              </td>
              <td className="dataTable">{a.id}</td>
              <td className="dataTable">{a.status}</td>
              <td className="dataTable">{a.pet.name}</td>
              <td className="dataTable">{a.applicant.firstName} {a.applicant.lastName}</td>
              <td className="dataTable">{a.applicant.approved ? "Yes" : "No"}</td>
            </tr>
          ))}
        {/* </tbody> */}
      </table>
      {/* </div> */}
    </div>
  )
}