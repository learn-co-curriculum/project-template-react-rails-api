import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/myPlants">My Plants</NavLink>
            <NavLink to="/reviews">My Reviews</NavLink>
            <NavLink to="/globalPlants">Global Plants</NavLink>
            <NavLink to="/login">Logout</NavLink>
        </div>

    )
}

export default NavBar