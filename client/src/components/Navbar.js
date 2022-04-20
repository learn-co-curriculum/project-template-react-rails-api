import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink className = "navlink" exact to="/">Start</NavLink>
      <NavLink className = "navlink" to="/login">Login/Signup</NavLink>
      <NavLink className = "navlink" to="/character">New Character</NavLink>
      <NavLink className = "navlink" exact to="/characters">My Characters</NavLink>
    </nav> 
  </div>)
}

export default NavBar;
