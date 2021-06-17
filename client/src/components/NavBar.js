import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const NavBar = ({ props, user, setUser})=> {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
 
 const [collapsed, setCollapsed] = useState(true);
 
 const toggleNavbar = () => setCollapsed(!collapsed);
 
 return (
   <div>
     <Navbar color="faded" light>
       <NavbarBrand style={{color: "rgb(212,175,55)", fontSize: "30px", fontFamily: "Permanent Marker, cursive"}} href="/" className="mr-auto">Menu</NavbarBrand>
       <NavbarToggler style={{color: "rgb(212,175,55)"}} onClick={toggleNavbar} className="mr-2" />
       <Collapse isOpen={!collapsed} navbar>
         <Nav navbar>
           <NavItem>
             <NavLink style={{color: "rgb(212,175,55)", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/new">Wellness</NavLink>
           </NavItem>
           <NavItem>
             <NavLink style={{color: "rgb(212,175,55)", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/bridesmaid">Mental Health</NavLink>
           </NavItem>
           <NavItem>
             <button style={{backgroundColor: "rgb(212,175,55)", width: "100px", border: "none", padding: "10px", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} onClick={handleLogoutClick}>Log Out</button>
           </NavItem>
         </Nav>
       </Collapse>
     </Navbar>
   </div>
 );
}
 
export default NavBar;
