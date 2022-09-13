import React from "react";
import { Link } from "react-router-dom";

function NavBar() {


    return (
        <div id="navbar">
            <span id="banner">
                <Link className="route-link" to="/home">Home</Link>
                <Link className="route-link" to="/lineup">Lineup</Link>
                <Link className="route-link" to="/schedule">Schedule</Link>
                <Link className="route-link" to="/tickets">Tickets</Link>
                <Link className="route-link" to="/login">Login</Link>
            </span>
        </div>
    );
};

export default NavBar;