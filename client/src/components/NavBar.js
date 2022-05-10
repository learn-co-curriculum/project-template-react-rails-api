// import React, { useState } from "react";
import {Link } from 'react-router-dom';
function NavBar(){
    
    return (
        <div className="navbar">
            <Link to="/Home"><button>Home</button></Link>
            <Link to="/messages"><button>Messages</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/settings"><button>Settings</button></Link>
        </div>
    )}

export default NavBar;