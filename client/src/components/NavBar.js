import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const NavBar = ({ user, setUser }) => {

    const history = useHistory()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((res) => {
          if (res.ok) {
            setUser(null)
            history.push('/login')
          }
        });
      }

    //logout logic (delete request)

    return (
        <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/myPlants">My Plants</NavLink>
            <NavLink to="/reviews">My Reviews</NavLink>
            <NavLink to="/globalPlants">Global Plants</NavLink>
            <span>Hello {user.username}!</span>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>

    )
}

export default NavBar