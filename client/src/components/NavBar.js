import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import styled from "styled-components";

function NavBar({ user, setUser }) {
    
    const history = useHistory();

    const NavUnlisted = styled.ul`
        text-decoration: none;
    `;

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };
    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null)
                history.push("/")
            }
        });
    }

    return (
        <header>
          <div>
            <Link to="/" >Home</Link>
          </div>
          <div>
            {user.role_type === "Doctor" ? (
              <>
              <Link to="/profile" >My Profile</Link>
              <Link to="/my-patients">My Patients</Link>
              {/* <Link to="/schedule">Schedule</Link> */}
              <Link to="/intakes">Upcoming Appointments</Link>
              <Link to="/past-appointments">Appointment History</Link>
              <button onClick={handleLogoutClick}>Logout</button>
              </>
            ) : (
              <>
              <Link to="/profile">My Profile</Link>
              <Link to="/my-doctors">My Doctors</Link>
              <Link to="/schedule">Schedule</Link>
              <Link to="/intakes">Upcoming Appointments</Link>
              <Link to="/past-appointments">Appointment History</Link>
              <button onClick={handleLogoutClick}>Logout</button>
              </>
            )}
          </div>
        </header>
      );
}

export default NavBar;