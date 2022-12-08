import React from 'react'
import { NavLink } from "react-router-dom";


function Navbar({updateUser}) {

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res => {
      if(res.ok){
        updateUser(false)
      }
    })
  }
  
  return (
    <nav className="nav">
      <h1>Flatiron Books</h1>
      <button onClick={handleLogOut}>Back</button>
      <button onClick={handleLogOut}>Log Out</button>
      <ul>
        <li className="active"><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/users/1'>User Page</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        {/* <li><NavLink to='/users/signup'>Sign Up</NavLink></li> */}
        {/* <li><NavLink to='/productions/new'>New Production</NavLink></li> */}
      </ul>
    </nav>
  )
}

export default Navbar