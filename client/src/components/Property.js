import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
    <Card className="card-property">
      <Card.Img variant="top" src={property.image_url} />
      <Card.Body>
        <Card.Title>{property.name}</Card.Title>
        {/* <Card.Text>{property.description}</Card.Text> */}
      </Card.Body>
      <div>
        <Card.Text>USD {property.price}.00</Card.Text>
        <Card.Text>USD {property.description}.00</Card.Text>
      </div>
      {/* <Link
        to={`/properties/${property.id}`}
        onClick={() => <Property key={property.id} />}
      >
        <Button variant="primary" className="btn-properties">
          View Property
        </Button>
      </Link> */}
    </Card>
  );
}

export default Property;
