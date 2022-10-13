import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = ()=> {
  return (
    // <div className="alert alert-primary">This is Header
    // <button classname="btn btn-md btn-info rounded-0">Home</button>
    // </div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MY YOGA APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            
            <Nav.Link  href="/add-yoga-videos">Add videos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">WELCOME KAREN</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LOGOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;