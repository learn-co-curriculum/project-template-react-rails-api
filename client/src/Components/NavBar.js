import React from 'react'
import './NavBar.css'

const Navbar = () => {
    const navLinksRef = React.useRef()
    const hamburgerRef = React.useRef()
    
    const toggleNavLinks = () => {
        navLinksRef.current.classList.toggle('open')
        hamburgerRef.current.classList.toggle('rotate')
    }

    return (
        <nav className='navBar' >
            <div className='hamburger' ref={hamburgerRef}onClick={toggleNavLinks}>
                <div class='line1'></div>
                <div class='line2'></div>
                <div class='line3'></div>


            </div>
               <ul className='nav-links' ref={navLinksRef}>
                    <li className='nav-li'><a className='nav-link one' href='/about'>About</a></li>
                    <li className='nav-li'><a className='nav-link two' href='/projects'>Projects</a></li>
                    <li className='nav-li'><a className='nav-link three' href='/contact'>Contact</a></li>
               </ul>
                <image src='https://i.pinimg.com/236x/dd/9f/5d/dd9f5d877e3b1d844838507e40b70398.jpg'></image>
        </nav>
    )
}

export default Navbar

