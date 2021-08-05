import React, { Component } from 'react';
import { Button } from '../Button';
import {MenuItems} from "./MenuItems"
import './Navbar.css'


class Navbar extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.setState.clicked})
  }
  
  // let handleLogout = () => {
  //   async function logout() {
  //     const res = await fetch('/logout', {method: 'DELETE'})
  //     if(res.ok){
  //       setCurrentUser(null)
  //     }
  //   }
  //   logout();
  // }

  render() {
    return(
      <nav className="NavbarItems">
      <h1 className="navbar-logo"> DevBrothers Coffee Shop <i class="fas fa-mug-hot"></i></h1>
      <div className="menu-icon" onClick={this.handleClick}>
      <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
      {MenuItems.map((item, index) =>{
        return (
          <li key={index}>
            <a className={item.cName} href={item.url}>
            {item.title}
            </a>
        </li>
        )
      })}
    </ul>
    <Button> Sign Up </Button>
  </nav>
    )
  }
}
 
export default Navbar