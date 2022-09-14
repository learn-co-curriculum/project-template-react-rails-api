import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setCurrentUser }) {

    const handleLogout = () => {
        fetch('/logout', { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                }
            })
    }

    return (
        <div id="navbar">
            <div id="DCL-div">
                <Link className="route-link" id="bannerDCL" to="/home"> DCL </Link>
            </div>
            <div id="banner">
                <Link className="route-link" to="/lineup">Lineup</Link>
                <Link className="route-link" to="/schedule">Schedule</Link>
                <Link className="route-link" to="/tickets">Tickets</Link>
                <Link className="route-link" to="/login">Login</Link>
                <Link className="route-link" to="/signup">Signup</Link>
                <Link className="route-link" to="/home" onClick={handleLogout}>Logout</Link>
            </div>
        </div>
    );
};

export default NavBar;
