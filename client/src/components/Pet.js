import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function Pet({ pet, currentUser }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let statusColor = pet.status === "Available" ? "success" : "warning"

  function handleAdoptRequest() {
    console.log("HANDLE ADOPT REQUEST IN PET.JS", pet, currentUser)
    // CHECK IF THERE'S A CURRENT USER, IF NOT THEN TELL USER TO REGISTER
    // IF THERES A CURRENT USER, THEN SUBMIT APPLICATIN. DISPLAY SUBMITTED CONFIRMATION MESSAGE.
    // fetch()
  }

  return (
    <div className="pet">

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pet.image} />
        <Card.Body>
          <Card.Title>{pet.name}, {pet.breed}, {pet.age}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><Badge bg={statusColor}>{pet.status}</Badge></ListGroupItem>
          <ListGroupItem>Height: {pet.height} inches, Weight: {pet.weight}lbs</ListGroupItem>
          <ListGroupItem>Energy Level: {pet.energy_level}</ListGroupItem>
        </ListGroup>
        {/* <Button variant="primary" onClick={showPetDetail}>More Details</Button> */}
        <>
          <Button variant="primary" onClick={handleShow}>
            More details
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{pet.name}, {pet.breed}, {pet.age} <Badge bg={statusColor}>{pet.status}</Badge></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Height: {pet.height} inches, Weight: {pet.weight}lbs</ListGroupItem>
                <ListGroupItem>Coat Type: {pet.coat_type}</ListGroupItem>
                <ListGroupItem>Energy Level: {pet.energy_level}</ListGroupItem>
                <ListGroupItem>Behavioral Issues: {pet.behavioral_issues ? "Yes" : "No"}</ListGroupItem>
                <ListGroupItem>{pet.description}</ListGroupItem>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              { currentUser ? 
                <>
                  <Button variant="primary" onClick={handleAdoptRequest}>
                    Apply to Adopt
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </>
                : 
                <>
                  <Button variant="primary" href="/homeportal/signup">
                    Register/Log In to Adopt
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </>
              }
            </Modal.Footer>
          </Modal>
        </>
      </Card>
    
    </div>
  )
}