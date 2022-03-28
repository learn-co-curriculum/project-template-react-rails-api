import React from 'react'
import { NavLink } from "react-router-dom"
import { FaHome } from 'react-icons/fa'
import { MdNotificationsActive } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import logo from '../Twiddle-Wakka.png'

function Navbar() {
  return (
    <header>
      <section>
        <img src={logo} alt='logo' id='logo'/>
        <div id="search-container">
            <form id="search-form">
                <label for="search-bar"></label>
                <BsSearch id='search-icon'/>
                <input type="text" id="search-bar" placeholder="Search posts..." />
            </form>
        </div>
        <nav>
          <ul className='nav-links'>
            <li className='nav-effect'><NavLink to="/homepage">Home</NavLink></li>
            <li className='nav-effect'><NavLink to="/profilepage">My Profile</NavLink></li>
            <li><MdNotificationsActive className='notification'/></li>
            <li><button className='logout-button'>Logout</button></li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Navbar