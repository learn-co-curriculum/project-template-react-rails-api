import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminFosters({ fosters, setFosters }) {
  const [modalShow, setModalShow] = useState(false);
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function addFoster(e) {
    e.preventDefault();
    console.log("addFoster has been invoked!", e)
  
    fetch("/fosters", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        first_name, last_name,
        email, phone
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(foster => {
          setFosters(...fosters, foster)
          console.log("POST /fosters success!", foster)
        })
      } else {
        r.json().then((err) => {
        console.log("POST fosters error", err);
      })
      }
    });
  }

  function editFoster(e) {
    e.preventDefault();
    console.log("editFoster has been invoked!")
  }

  function AddFosterModal(props) {
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
            Add Foster
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h3>Add Foster</h3> */}
          <Form onSubmit={(e) => addFoster(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="string" placeholder="Enter first name" onChange={(e)=>setFirstName(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="string" placeholder="Enter last name" onChange={(e)=>setLastName(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone" onChange={(e)=>setPhone(e.target.value)}/>
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
    <div id="admin_fosters">
      <h3>Fosters</h3>

       <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Foster
        </Button>

        <AddFosterModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          {fosters.map(f => (
            <tr>
              <td>{f.id}</td>
              <td>{f.first_name}</td>
              <td>{f.last_name}</td>
              <td>{f.phone}</td>
              <td>{f.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}