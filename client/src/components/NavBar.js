import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li>
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
