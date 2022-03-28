import React from 'react'
import prelogin_logo from '../prelogin.gif'
import { Link } from 'react-router-dom'

function PreLogin() {
  return (
    <div>
      <img id="prelogin-logo" src={prelogin_logo} alt="TypewriterLogo"/>
      <Link id="prelogin-link" to="/login">~{'>'}</Link>
    </div>
  )
}

export default PreLogin