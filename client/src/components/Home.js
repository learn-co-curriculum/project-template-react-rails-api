import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
            <div id="home_adoptablepets_textlink">
              <h1>Find your next best friend!</h1>
              <p>With integrity, we aim to protect the abandoned by giving them hope for the future and selecting a home that will fit their needs.</p>
              <Button type="button" class="btn btn-primary">See Adoptable Pets</Button>
            </div>
        </Col>
        <Col>
          <div id="home_adoptablepets_img">
            <img src="./images/adoptablepets_img.png" alt="adoptablepets_img"/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>The Adoption Process</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Renting With Pets</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Pet Training Resources</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}