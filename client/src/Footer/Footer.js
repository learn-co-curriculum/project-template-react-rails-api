import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaPinterestP, FaReact, FaRegCopyright } from 'react-icons/fa'

function Footer() {
  return (
    <div>
    <div>
        <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact us</li>
        </ul>
     <div>
        <FaFacebookF/>
        <FaTwitter/>
        <FaGooglePlusG/>
        <FaLinkedinIn/>
        <FaPinterestP/>
     </div>
    </div>

    <h4>PCNN <FaRegCopyright/>. Made with <FaReact/> by PCNN</h4>
    </div>

  )
}

export default Footer