import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/bands">Bands</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default NavBar;
