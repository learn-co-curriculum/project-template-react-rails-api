import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container id="home">
      <Row className="home_adoptablepets">
        <Col>
              <h2>Find your next best friend!</h2>
              <p>With integrity, we aim to protect the abandoned by giving them hope for the future and selecting a home that will fit their needs.</p>
              <Button 
                type="button" 
                class="btn btn-large" 
                href="/adoptablepets"
                style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
              >See Adoptable Pets</Button>
        </Col>
        <Col>
          <div id="home_adoptablepets_img">
            <img width="100%" src="./images/adoptablepets_img.jpg" alt="adoptablepets_img"/>
          </div>
        </Col>
      </Row>

      <Row className="home_infocards">
        <Col>
          <Card style={{ width: '22rem', padding: '20px', margin: '20px' }}>
            <Card.Img variant="top" src="./images/adoptionprocess.png" />
            <Card.Body>
              <Card.Title>The Adoption Process</Card.Title>
              <Card.Text>
                Learn about our custom adoption process and how we match pets to their potential homes.
              </Card.Text>
              <Button class="btn btn-large" style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '22rem', padding: '20px', margin: '20px' }}>
            <Card.Img variant="top" src="./images/homeapt.jpg" />
            <Card.Body>
              <Card.Title>Renting With Pets</Card.Title>
              <Card.Text>
              Click to learn about common policies and fees associated with adopting a pet while renting your home.
              </Card.Text>
              <Button class="btn btn-large" style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '22rem', padding: '20px', margin: '20px' }}>
            <Card.Img variant="top" src="./images/training.jpeg" />
            <Card.Body>
              <Card.Title>Pet Training Resources</Card.Title>
              <Card.Text>
                Every family is unique training not only helps your pet integrate into your family, it strengthen your bond.
              </Card.Text>
              <Button class="btn btn-large" style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}