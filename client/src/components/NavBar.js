import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const NavBar = ({ profiles, user, setUser})=> {
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
       <NavbarBrand style={{color: "#9D7E68", fontSize: "30px", fontFamily: "Permanent Marker, cursive"}} href="/" className="mr-auto">Menu</NavbarBrand>
       <NavbarToggler style={{color: "#9D7E68"}} onClick={toggleNavbar} className="mr-2" />
       <Collapse isOpen={!collapsed} navbar>
         <Nav navbar>
           <NavItem>
             <NavLink style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/wellness">Wellness</NavLink>
           </NavItem>
           <NavItem>
             <NavLink style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/therapist">Mental Health</NavLink>
           </NavItem>
           <NavItem>
             <NavLink style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/blogs">Blogs</NavLink>
           </NavItem>
           <NavItem>
             {profiles.length >0 ? <NavLink style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/myprofile"> My Profile</NavLink> : <NavLink style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/profile">Create Profile</NavLink>}
           </NavItem>
           <NavItem>
             <button style={{backgroundColor: "#9D7E68", color: "white", width: "100px", border: "none", padding: "10px", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} onClick={handleLogoutClick}>Log Out</button>
           </NavItem>
         </Nav>
       </Collapse>
     </Navbar>
   </div>
 );
}
 
export default NavBar;
