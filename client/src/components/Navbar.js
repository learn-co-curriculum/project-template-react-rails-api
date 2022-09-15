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
                    history.push('./')
                }
            })
    }
    function handleClick() {
        history.push('./')
    }

    return (
        <div id="navbar">
            <img id='icon' onClick={handleClick} src={icon} width='80px' alt=''></img>
            <div className="banner">
                <Link className="route-link" to="/lineup">Lineup</Link>
                <Link className="route-link" to="/schedule">Schedule</Link>
                <Link className="route-link" to="/tickets">Tickets</Link>
                {loggedIn ?
                    (<div id="banner">
                        <Link className="route-link" to="/" onClick={handleLogout}>Logout</Link>
                        <Link id="profile-link" to="/profile">Profile</Link>
                    </div>)
                    :
                    (<Link className="route-link" to="/login">Login</Link>)}


            </div>
        </div>
    );
};

export default NavBar;
