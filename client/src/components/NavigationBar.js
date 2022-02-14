import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AccountDropdown from './AccountDropdown'

function NavigationBar() {

    return(
        <Nav fill style={{ backgroundColor:'#0F2C80', paddingTop:'30px', paddingBottom:'30px'}}>
            <Nav.Item className='mt-2'>
                <Link to="/properties" style={{color:'white', textDecoration: 'none'}}>My Properties</Link>
            </Nav.Item>
            <Nav.Item className='mt-2'>
                <Link to="/bookings" style={{color:'white', textDecoration: 'none'}}>My Bookings</Link>
            </Nav.Item>
            <Nav.Item className='mt-2'>
                <AccountDropdown/>
            </Nav.Item>
        </Nav>
    )
}

export default NavigationBar