import React from "react";
import "./NavBar.css";

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
      <h3>Welcome Back {user.name}</h3>
      <ul className="nav-links">
        <li className="nav-li">
          <a className="nav-link one" href="/about">
            About
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link two" href="/projects">
            Projects
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-link three"
            href="/login"
            onClick={handleLogoutClick}
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Testing Testing Testing

export default Navbar;
