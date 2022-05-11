// import React, { useState } from "react";
import {Link } from 'react-router-dom';
function NavBar(){
    
    return (
        <div className="navbar">
            <Link to="/Home"><button>Home</button></Link>
            <Link to="/Request"><button>Requests</button></Link>
            <Link to="/ProfileInfo"><button>Profile</button></Link>
            <Link to="/settings"><button>Settings</button></Link>
            <Link to="/Login"><button>Login</button></Link>
        </div>
    )}

export default NavBar;