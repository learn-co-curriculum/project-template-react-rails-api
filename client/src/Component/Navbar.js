import React from 'react'
import { Link } from "react-router-dom"
import '../Style/Navbar.css'

function Navbar() {
  return (
    <div >
      <nav className='navbar'>
        <img className='logo' src="https://codetheweb.blog/assets/img/icon2.png" />
        <ul className='nav-links'>
          <span> <Link to='/'>Home</Link> </span>
          <span><Link to='/about'>About</Link></span>
          <span> <Link to='/Start_Shopping'>StartShopping</Link> </span>
          <span><Link to='/profile'>Profile</Link></span>
          <span><Link to='/cart'>Cart</Link></span>
          <span><Link to='/shoplist'>ShoppingList</Link></span>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar