import React from "react";
import { Link, useHistory } from "react-router-dom";
import icon from '../assets/Icon1.svg'


function NavBar({ setCurrentUser, loggedIn, setLoggedIn }) {

    let history = useHistory()

    const handleLogout = () => {
        fetch('/logout', { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                }
            })
    }
    function handleClick() {
        history.push('./home')
    }

    return (
        <div id="navbar">
            <img id='icon' onClick={handleClick} src={icon} width='80px' alt=''></img>
            <div id="banner">
                <Link className="route-link" to="/lineup">Lineup</Link>
                <Link className="route-link" to="/schedule">Schedule</Link>
                <Link className="route-link" to="/tickets">Tickets</Link>
                {loggedIn ? (<Link className="route-link" to="/home" onClick={handleLogout}>Logout</Link>)
                    :
                    (<div><Link className="route-link" to="/login">Login</Link>
                        <Link className="route-link" to="/signup">Signup</Link></div>)}


            </div>
        </div>
    );
};

export default NavBar;
