import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function FosterNavBar({ currentUser, handleLogOut }) {
  
  return (
    <Navbar expand="lg" className="navbar">
      <Container >
        <img
        src="http://localhost:4000/images/logo.png"
        className="logo"
        alt="logo"
      />
      <h3>
        {currentUser ? `Hi Foster, ${currentUser.firstName} ${currentUser.lastName}!` : "Paws & Claws Pet Rescue"}
      </h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* keep this nav so links render on right side */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="/fosterportal/pets">Pets</Nav.Link> */}
            <Nav.Link href="/" onClick={handleLogOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}