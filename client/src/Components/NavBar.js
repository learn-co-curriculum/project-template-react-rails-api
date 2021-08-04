import { NavLink } from 'react-router-dom'


let NavBar = () => {
    return (
        <div className="NavBar">
            <NavLink
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                to="/brew_methods"
            >
                Brew Process
            </NavLink>
            <NavLink
                to="our_story"
            >
                Our Story
            </NavLink>
            <NavLink
                to="my_cart"
            >
                View Cart
            </NavLink>
            <NavLink
                to="/logout"
            >
                Logout
            </NavLink>
            <NavLink
                to="/signup"
            >
                Sign Up
            </NavLink>

        </div>
    )
}

export default NavBar