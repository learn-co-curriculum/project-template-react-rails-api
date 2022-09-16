import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react'

import MenuBack, { MenuBox, MenuDropdown, MenuBurger } from '../styles/Menu.style';

import cross from '../images/MedicCrossWhite.png'
import logo from '../images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({updateUser, currentUser}) => {
	const [menu, setMenu] = useState(false);
	const history = useHistory()

	const handleLogout = (e) => {
		fetch(`/logout`, {
			method: 'DELETE'
		})
			.then(() => {
				updateUser("")
				history.push('/login')
			})
	}

	console.log(currentUser)

	const renderMenuHome = () => {
		if(currentUser.admin) {
			return <Link to={`/providers`}>Show Providers</Link>
		} else if (currentUser) {
			return <Link to={`/appointments`}>Your Appointments</Link>
		} else {
			return <Link to="/signup">Sign Up</Link>
		}
	}

	const renderMenuCreate = () => {
		if(currentUser.admin) {
			return <li><Link to={`/providers/create`}>Add A Provider</Link></li>
		} else if (currentUser) {
			return <li><Link to={`/appointments/create`}>Make An Appointment</Link></li>
		} else {
			return null
		}
	}

	return(
		<MenuBox>
			<div className='logo'><img src= {logo} alt= "dr-aid-logo" /></div>
			<MenuBack varImg= {cross}>
				<div></div>
				<div>
					<MenuBurger onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu size={30} />
          </MenuBurger>
				</div>
				<div>
					
						{!menu ? null : 					
							<MenuDropdown>
								<li>
									{renderMenuHome()}
								</li>							
								{renderMenuCreate()}							
								<li>
									{currentUser ? <h4 onClick={handleLogout}>Log Out</h4> : <Link to="/login">Login</Link> }
								</li>
							</MenuDropdown>				
        		}
					
				</div>				
			</MenuBack>				
		</MenuBox>
	)
}

export default NavBar;