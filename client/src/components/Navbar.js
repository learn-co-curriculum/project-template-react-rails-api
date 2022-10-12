import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
      <Container className="nav1" style={{}}>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="" as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className="" as={Link} to={"/property"}>
              Property
            </Nav.Link>
            <Nav.Link className="" as={Link} to={"/about"}>
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="" as={Link} to={"/signin"}>
              SignIn
            </Nav.Link>
            <Nav.Link className="" as={Link} to={"/signup"}>SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
