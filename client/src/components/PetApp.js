import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function PetApp({ setApplications, pets }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div id="pet_app">
       <>
        <Button variant="primary" onClick={handleShow}>
          Adoption Application
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adoption Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select aria-label="Default select example">
              <option>Select Pet</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              {/* {pets.map(p => (
                <option value={p.id}>{p.name}, {p.breed}</option>
              ))} */}
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Submit</Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}