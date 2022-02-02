import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function Pet({ pet }) {
  let statusColor = pet.status === "Available" ? "success" : "warning"

  return (
    <div id="pet">


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pet.image} />
        <Card.Body>
          <Card.Title>{pet.name}, {pet.breed}</Card.Title>
          {/* <Card.Text>
            {pet.description}
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><Badge bg={statusColor}>{pet.status}</Badge></ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Button variant="primary">Go somewhere</Button>
      </Card>
    
    
    
    </div>
  )
}