import React from 'react'
import { Link } from "react-router-dom"
import '../Style/Navbar.css'

function Navbar() {
  return (
    <div className='navbar' >
      <nav>
        <img className='logo' src="https://codetheweb.blog/assets/img/icon2.png" />
        <div className='nav-links'>
           <Link to='/'>Home</Link> 
          <Link to='/about'>About</Link>
           <Link to='/Start_Shopping'>StartShopping</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/shoplist'>ShoppingList</Link>
        </div>
      </nav>

    </div>
  )
}

export default Navbar