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
          <a className="nav-link one" href="/">
            Home
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link two" href="/eventspage">
            Events
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-link one"
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

export default Navbar;
