import React from "react";
import "./Nav.css"
import { useNavigate } from  "react-router-dom"


const NavBar = () => {
    const navigate = useNavigate()

    function handleClickProfile(){
        navigate("/profile")
    }
    function handleClickToday(){
        navigate("/")
    }
    function handleClickHistory(){
        navigate("/history")
    }

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
    function onLogout(){
        navigate("/login")
    }

    return (
        <div className="NavBar">
            <p onClick={handleClickHistory}>History</p>
            <p onClick={handleClickToday}>Today</p>
            <p onClick={handleClickProfile} className="profile" >Your Profile</p>
            <p onClick={handleLogout}>Logout</p>
            <br></br>
        </div>
    )
}

export default NavBar