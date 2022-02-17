import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function Pet({ pet, currentUser }) {
  const [show, setShow] = useState(false);
  const [onApp, setOnApp] = useState("Apply to Adopt!")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let statusColor;
  if (pet.status === "Available") {
    statusColor = "success"
  } else if (pet.status === "Intake Pending") {
    statusColor = "warning"
  } else if (pet.status === "Adopted!") {
    statusColor = "secondary"
  }

  function handleAdoptRequest() {
    // console.log("HANDLE ADOPT REQUEST IN PET.JS", pet, currentUser)
    fetch("/pet_applications", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        pet_id: pet.id,
        applicant_id: currentUser.id,
        status: "Submitted"
      })
    })
    .then((r) => {
      if (r.ok) { r.json().then(pet => {
          console.log("PET POSTED OK", pet)
          setOnApp("Submitted!")
        })
      } else {
        r.json().then((err) => {
          console.log("POST pet_application error", err);
        })
      }
    })
  }

  return (
    <div className="pet">

      <Card style={{ width: '15rem' }} className="petCard">
        <Card.Img 
        variant="top" 
        src={pet.image} className="petImg" onClick={handleShow}/>
        <Card.Body>
          <Card.Title>{pet.name}, {pet.breed}, {pet.age}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Badge bg={statusColor} className="petStatus">{pet.status}</Badge>
          <ListGroupItem>Height: {pet.height} inches</ListGroupItem>
          <ListGroupItem>Weight: {pet.weight}lbs</ListGroupItem>
          <ListGroupItem>Energy Level: {pet.energy_level}</ListGroupItem>
        </ListGroup>

        <>
          {/* <Button variant="primary" onClick={handleShow}>
            More details
          </Button> */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
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
                  <Button class="btn btn-large" style={{ backgroundColor: "#f4805c", color: "white", fontWeight: "bold", "fontSize":"14px"}} onClick={handleAdoptRequest}>
                    {onApp}
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </>
                : 
                <>
                  <Button class="btn btn-large" style={{ backgroundColor: "#f4805c", color: "white", fontWeight: "bold", "fontSize":"14px"}} href="/homeportal/signup">
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