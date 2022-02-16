import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ApplicantNavBar({ currentUser, handleLogOut }) {
  // console.log("IS APPLICANT NAV");
  return (
    <Navbar expand="lg" className="navbar">
      <Container >
        <img
        src="http://localhost:4000/images/logo.png"
        className="logo"
        alt="logo"
      />
      <h3>Welcome to Paws&Claws, {currentUser.firstName} {currentUser.lastName}!</h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* keep this nav so links render on right side */}
          </Nav>
          <Nav>
            <Nav.Link href="/applicantportal">Applications</Nav.Link>
            <Nav.Link href="/applicantportal/adoptablepets">Adoptable Pets</Nav.Link>
            <Nav.Link href="/" onClick={handleLogOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}