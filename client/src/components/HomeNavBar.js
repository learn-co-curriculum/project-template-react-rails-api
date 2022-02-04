import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HomeNavBar({ currentUser, handleLogOut }) {
  return (
    <Navbar expand="lg" className="navbar">
      <Container >
        <img
        src="./images/logo.png"
        className="logo"
        alt="logo"
      />
      <h2>Paws & Claws Pet Rescue</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* keep this nav so links render on right side */}
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adoptablepets">Adoptable Pets</Nav.Link>
            <Nav.Link href="/homeportal">Rescue Portal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}