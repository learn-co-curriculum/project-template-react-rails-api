import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Property from "./Property";
import { Link } from "react-router-dom";

function Properties({ properties }) {
  // handle click event for the button to fetch property details
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <Container className="container-properties">
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) =>
          // select five properties
          properties.slice(0, 5).map((property) => (
            <Col key={property.id}>
              <Card className="card">
                <Card.Img variant="top" src={property.image_url} />
                <Card.Body>
                  <Card.Title>{property.name}</Card.Title>
                  {/* <Card.Text>{property.description}</Card.Text> */}
                </Card.Body>
                <Card.Text>USD {property.price}.00</Card.Text>
                <Link
                  to={`/properties/${property.id}`}
                  onClick={() => <Property key={property.id} />}
                >
                  <Button
                    variant="primary"
                    className="btn-properties"
                  >
                    View Property
                  </Button>
                </Link>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Properties;
