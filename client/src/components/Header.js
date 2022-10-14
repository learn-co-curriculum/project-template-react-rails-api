import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Breadcrumbs from './Breadcrumb';
// import { Link } from "react-router-dom";
const Header = ()=> {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{fontWeight:"700"}}  to ="/">MY YOGA ZONE</Navbar.Brand>
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
            <Nav.Link     onClick={handleLogoutClick}>
           
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default Header;