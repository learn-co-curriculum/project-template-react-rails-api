import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from '@mantine/core';

function NavBar() {
  return (
    <nav>
      <Button>
        <NavLink exact to="/">Home</NavLink>
      </Button>
      <Button>
        <NavLink to="/concerts">Concerts</NavLink>
      </Button>
      <Button>
        <NavLink to="/bands">Bands</NavLink>
      </Button>
      <Button>
        <NavLink to="/profile">Profile</NavLink>
      </Button>
      <Button>
        <NavLink to="/login">LogIn</NavLink>
      </Button>
      <Button>
        <NavLink to="/signup">SignUp</NavLink>
      </Button>
    </nav>
  );
}

export default NavBar;
