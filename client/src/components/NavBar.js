import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  
  function handleLogoutClick() {
    fetch("api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>

        <div>Safe Stalls</div>

      </Logo>
      <Nav>
      <Button as={Link} to="/locations">
          Home
        </Button>
        <Button as={Link} to="/new">
          Add New Bathroom
        </Button>
        <Button as={Link} to="/locations" color="secondary"  onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const Logo = styled.h1`
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 4rem;
  color: #DDA0DD;
  margin: 0;

  line-height: 1;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;