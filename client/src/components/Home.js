import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home({ renderAdoptablePets }) {
  
  return (
    <Container>
      <Row className="home_adoptablepets">
        <Col>
              <h1>Find your next best friend at Paws and Claws!</h1>
              <p>With integrity, we aim to protect the abandoned by giving them hope for the future and selecting a home that will fit their needs.</p>
              <Button type="button" class="btn btn-primary" onClick={renderAdoptablePets}>See Adoptable Pets</Button>
        </Col>
        <Col>
          <div id="home_adoptablepets_img">
            <img width="87%" src="./images/adoptablepets_img.jpg" alt="adoptablepets_img"/>
          </div>
        </Col>
      </Row>
      <Row className="home_infocards">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./images/adoptionprocess.png" />
            <Card.Body>
              <Card.Title>The Adoption Process</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./images/homeapt.jpg" />
            <Card.Body>
              <Card.Title>Renting With Pets</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./images/training.jpeg" />
            <Card.Body>
              <Card.Title>Pet Training Resources</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}