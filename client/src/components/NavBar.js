import react from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


function NavBar ({ user }){

    return (
        <div id="nav">
        {user ? <div>
        <NavLink
         to="/"
         exact
        >
            Home Page
        </NavLink>
        <NavLink
        to="/matches" 
        exact
        >
            Matches
        </NavLink>
        </div> : null }
        </div>
    )
}

export default NavBar;