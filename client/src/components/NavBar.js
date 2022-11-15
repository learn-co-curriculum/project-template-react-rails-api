import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/concerts">Concerts</NavLink>
      <NavLink to="/bands">Bands</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
    </nav>
  );
}

export default NavBar;
