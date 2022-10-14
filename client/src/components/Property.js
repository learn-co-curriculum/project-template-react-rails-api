import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Button, Form, Modal } from "react-bootstrap";

function Property() {
  const { id } = useParams();
  const [property, setProperty] = useState([]);
  const [seller, setSeller] = useState([]);
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const resetForm = () => {
      let form = document.getElementById("form");
      form.reset();
    };

    // post request to send email to seller
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch("/sellers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Success:", data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    return (
      <>
        <Button variant="primary" onClick={handleShow} className="btn-properties">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
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
              <Seller />
            <Link to={`/`}>
              <Button variant="primary" className="btn-properties">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Seller />
    </Container>
  );
}

export default Property;
