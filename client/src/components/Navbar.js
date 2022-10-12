import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";


function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>

           
          </Nav>
          <Nav>
          <Nav.Link href="#pricing">SignUp</Nav.Link>
          <Nav.Link href="#pricing">SignIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;