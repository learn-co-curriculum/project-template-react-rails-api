import React from 'react'
import { useNavigate, NavLink } from "react-router-dom";

function Navbar({updateUser}) {
  // const navigate = useNavigate()

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res => {
      if(res.ok){
        updateUser(false)
        sessionStorage.clear()
        // navigate('/login')
      }
    })
    
  }
  
  return (
    <nav className="nav">
      <ul className="main-nav">
        <li className="active"><NavLink id="home" className="NavLink" to="/">Home</NavLink></li>
        <li><NavLink className="NavLink" to='/books/new'>Add a Book</NavLink></li>
        <li><button id="logout" className="button" onClick={handleLogOut}>Log Out</button></li>
        <li><NavLink id="signup" className="NavLink" to='/users/signup'>Sign Up</NavLink></li>
        <li><NavLink id="login" className="NavLink" to='/login'>Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar