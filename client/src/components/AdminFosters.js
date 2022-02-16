import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminFosters({ fosters, setFosters, pets, setPets, petFosters, setPetFosters }) {
  const [showEditFoster, setShowEditFoster] = useState(false);
  // const [showAssignFoster, setShowAssignFoster] = useState(false);
  const [fosterToUpdate, setFosterToUpdate] = useState({id: "", first_name: "", last_name: "", phone: "", email: ""});

  function editFoster(e) {
    let fosterObj = {};

    if (e.target[0].value === "") {
      fosterObj["first_name"] = fosterToUpdate.first_name;
    } else if(e.target[0].value.toLowerCase() !== fosterToUpdate.first_name.toLowerCase()) {
      fosterObj["first_name"] = e.target[0].value;
    } 

    if (e.target[1].value === "") {
      fosterObj["last_name"] = fosterToUpdate.last_name;
    } else if (e.target[1].value.toLowerCase() !== fosterToUpdate.last_name.toLowerCase()) {
      fosterObj["last_name"] = e.target[1].value;
    } 

    if (e.target[2].value === "") {
      fosterObj["email"] = fosterToUpdate.email;
    } else if (e.target[2].value !== fosterToUpdate.email) {
      fosterObj["email"] = e.target[2].value;
    }

    if (e.target[3].value === "") {
      fosterObj["phone"] = fosterToUpdate.phone;
    } else if (e.target[3].value !== fosterToUpdate.phone) {
      fosterObj["phone"] = e.target[3].value;
    }

    fetch(`/fosters/${fosterToUpdate.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(fosterObj)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(foster => {
          console.log("PATCH /fosters success!", foster)
        })
      } else {
        r.json().then((err) => {
          console.log("PATCH fosters error", err);
      })
      }
    });

  }

  function EditFosterModal(props) {
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
            Edit Foster
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h3>Add Foster</h3> */}
          <Form onSubmit={(e) => editFoster(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="string" placeholder={fosterToUpdate.first_name} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="string" placeholder={fosterToUpdate.last_name} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder={fosterToUpdate.email} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder={fosterToUpdate.phone} />
              </Form.Group>
            </Row>
            
            <Button type="submit"
              class="btn btn-large" 
              style={{ backgroundColor: "#f4805c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
            >
              Submit
            </Button>
            {/* <Button onClick={props.onHide}>Close</Button> */}
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function openEditFosterModal(foster) {
    setFosterToUpdate(foster);
    setShowEditFoster(true);
  }

  return (
    <div id="admin_fosters">
      <h3 className="pageName">Fosters</h3>

      {/* <>
        <Button variant="primary" onClick={() => setShowAssignFoster(true)}>
          Manage Foster(s)
        </Button>

        <AssignFosterModal
          show={showAssignFoster}
          onHide={() => setShowAssignFoster(false)}
        />
      </> */}
      
      <div style={{overflowX: "auto", width: "83%", marginLeft: "auto", marginRight: "auto"}}>
        <table className="dataTable">
          {/* <thead> */}
            <tr className="dataTableHeader">
              <th className="dataTableHeader">Edit</th>
              <th className="dataTableHeader">id</th>
              <th className="dataTableHeader">Name</th>
              <th className="dataTableHeader">Phone</th>
              <th className="dataTableHeader">Email</th>
              {/* <th>Foster Pets</th> */}
            </tr>
          {/* </thead> */}
          {/* <tbody> */}
            {fosters.map((f, i) => (
              <tr key={f.id} className="dataTable">
                <td className="dataTable">     
                  <Button onClick={() => openEditFosterModal(f)}
                    class="btn btn-large"
                    style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
                  >
                    Edit
                  </Button>

                  <EditFosterModal
                    show={showEditFoster}
                    onHide={() => setShowEditFoster(false)}
                  />
                </td>
                <td className="dataTable">{f.id}</td>
                <td className="dataTable">{f.first_name} {f.last_name}</td>
                <td className="dataTable">{f.phone}</td>
                <td className="dataTable">{f.email}</td>
                {/* <td>
                  <ul>
                    {f.pet.map((p)=> (
                      <li>{p.name}</li>
                    ))}
                  </ul>
                </td> */}
              </tr>
            ))}
          {/* </tbody> */}
        </table>
      </div>
    </div>
  )
}