import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Property() {
  const { id } = useParams();
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch(`/properties/${id}`)
      .then((res) => res.json())
      .then((property) => {
        console.log(property);
        setProperty(property);
      });
  }, [id]);

  return (
    <Container>
      <div className="card-container">
        <img src={property.image_url} alt={property.name}></img>
        <div className="card-container-details">
          <h2>{property.name}</h2>
          <p>{property.description}</p>
          <p>USD {property.price}.00</p>
          <div className="property-buttons">
            <Button variant="primary" className="btn-properties">
              Purchase
            </Button>
            <Button variant="primary" className="btn-properties">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Property;
