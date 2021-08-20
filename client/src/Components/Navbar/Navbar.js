import React from 'react'
import { Nav, NavLink, NavBtn, NavBtnCont, NavMenu, Bars } from './NavbarElements'

const Navbar = ({ user, handleLogOut }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Only Chores</h1>
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
                <NavBtnCont>
                    <NavBtn style={{ visibility: user ? 'visible' : "hidden"}}onClick={handleLogOut}>Log Out</NavBtn>       
                </NavBtnCont>
            </Nav>
        </>
    )
}

export default Navbar
