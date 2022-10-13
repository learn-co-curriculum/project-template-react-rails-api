import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumbs from './Breadcrumb';
// import { Link } from "react-router-dom";

const Header = ()=> {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  to ="/">MY YOGA APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="./">Home</Nav.Link>
            <Nav.Link to="/reviews">Reviews</Nav.Link>
            <Nav.Link to="/">Users</Nav.Link>

            <Nav.Link  to="./add-yoga-tutorials">Add Tutorials</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  >WELCOME KAREN</Nav.Link>
            <Nav.Link eventKey={2}  >
              LOGOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default Header;