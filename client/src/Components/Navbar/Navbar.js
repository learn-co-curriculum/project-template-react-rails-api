import React from 'react'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        Chores
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtmLink to="/login">Sign In</NavBtmLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
