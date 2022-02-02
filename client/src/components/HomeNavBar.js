import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HomeNavBar() {
  return (
      <Navbar bg="light" expand="lg" className="navbar">
      <img className="logo" src="./images/logo.png" alt="logo"/>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* keep this nav so links render on right side */}
          </Nav>
          <Nav>
            <Nav.Link href="#home">Adoptable Pets</Nav.Link>
            <Nav.Link href="#deets">Rescue Portal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}