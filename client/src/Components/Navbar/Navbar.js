import React from 'react'
import { Nav, NavLink, NavBtn, NavBtnCont, NavMenu, Bars } from './NavbarElements'

const Navbar = ({ user, handleLogOut }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>ChoresApp</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/new-chore" activeStyle>
                        Add New Chore
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
                <NavBtnCont>
                    <NavBtn style={{ visibility: user ? 'visible' : "hidden"}}onClick={handleLogOut}>Log Out</NavBtn>       
                </NavBtnCont>
            </Nav>
        </>
    )
}

export default Navbar
