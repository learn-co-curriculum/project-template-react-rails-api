import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ properties }) {
  return (
    <>
      <Carousel>
        {/* select three propeeties */}
        {properties.slice(0, 3).map((property) => (
          <Carousel.Item key={property.id}>
            <img
              className="d-block w-100"
              src={property.image_url}
              alt={property.name}
            />
            <Carousel.Caption>
              <h3>{property.name}</h3>
              <p>{property.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        <Button variant="primary" className="btn-properties">
          View Properties
        </Button>{" "}
      </Carousel>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
            {/*  */}
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
