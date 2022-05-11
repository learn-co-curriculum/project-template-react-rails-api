// import React, { useState } from "react";
import {Link } from 'react-router-dom';
function NavBar(){
    
    return (
        <div className="navbar">
            <Link to="/Home"><button>🏠</button></Link>
            <Link to="/Request"><button>📨</button></Link>
            <Link to="/ProfileInfo"><button>👤</button></Link>
            <Link to="/settings"><button>⚙️</button></Link>
            <Link to="/Login"><button>Login</button></Link>
        </div>
    )}

export default NavBar;