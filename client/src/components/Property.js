import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

function Property() {
  const { id } = useParams();
  const [property, setProperty] = useState([]);
  // set default to email
  const [seller, setSeller] = useState("email");
  useEffect(() => {
    fetch(`/properties/${id}`)
      .then((res) => res.json())
      .then((property) => {
        console.log(property);
        setProperty(property);
        setSeller(property.seller);
      });
  }, [id]);

  const Seller = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const resetForm = () => {
      let form = document.getElementById("form");
      form.reset();
    };

    // post to seller
    const handleClick = (seller) => {
      console.log(seller);
      const name = seller.name;
      const email = seller.email;
      const message = seller.message;

      axios
        .post("/sellers", {
          name,
          email,
          message,
        })
        .then(() => {
          alert("message successfully sent");
        })
        .catch((error) => {
          console.log(error);
        });
      resetForm();
      navigate("/");
    };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Contact Seller
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Seller</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="form">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={seller.email}
                  onChange={(e) => setSeller(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="write your message"
                  value={seller.message}
                  onChange={(e) => setSeller(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleClick}>
              Send Message
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <Container>
      <div className="card-container">
        <img src={property.image_url} alt={property.name}></img>
        <div className="card-container-details">
          <h2>{property.name}</h2>
          <p>{property.description}</p>
          <p>USD {property.price}.00</p>
          <div className="seller">
            <h4>Seller: {seller.name}</h4>
            <p>Email: {seller.email}</p>
          </div>
          <div className="property-buttons">
            <Button variant="primary" className="btn-properties">
              <Seller />
            </Button>
            <Button variant="primary" className="btn-properties">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
      <Seller />
    </Container>
  );
}

export default Property;
