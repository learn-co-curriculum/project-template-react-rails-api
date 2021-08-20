import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";


const Navbar = ({ user, setUser }) => {
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav className="navBar">
      <ul className="nav-links">
      <li className="nav-li">
          <NavLink className="nav-link one" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink className="nav-link two" to="/eventspage">
            Events
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            className="nav-link one"
            to="/login"
            onClick={handleLogoutClick}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
