import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Property from "./Property";
import { Link } from "react-router-dom";

function Properties({ properties }) {
  return (
    <Container className="container-properties">
      {/* map through properties */}
      {properties.map((property) => (
        <Card className="card" key={property.id}>
          <Card.Img variant="top" src={property.image_url} />
          <Card.Body>
            <Card.Title>{property.name}</Card.Title>
            <Card.Text>USD {property.price}.00</Card.Text>
            <Link
              to={`/properties/${property.id}`}
              onClick={() => <Property key={property.id} />}
            >
              <Button variant="primary" className="btn-properties">
                View Property
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Properties;
