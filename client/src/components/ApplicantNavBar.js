import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ApplicantNavBar({ currentUser }) {
  return (
    <Navbar expand="lg" className="navbar">
      <Container >
        <img
        src="./images/logo.png"
        className="logo"
        alt="logo"
      />
      <h2>Hi, {currentUser}!</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* keep this nav so links render on right side */}
          </Nav>
          <Nav>
            <Nav.Link href="/applicantportal/applications">Applications</Nav.Link>
            <Nav.Link href="/applicantportal/adoptablepets">Adoptable Pets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}