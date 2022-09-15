import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react'

import MenuBack, { MenuBox, MenuDropdown, MenuBurger } from '../styles/Menu.style';

import cross from '../images/MedicCrossWhite.png'
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
			<div></div>
			<MenuBack varImg= {cross}>
				<div></div>
				<div>{!menu ? (
          <MenuBurger onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu size={30} />
          </MenuBurger>
        ) : (
					
					<div onClick={() => setMenu(!menu)}>
						<MenuBurger><GiHamburgerMenu size={30} /></MenuBurger>
						<MenuDropdown>						
							<li>
								{renderMenuHome()}
							</li>							
							{renderMenuCreate()}							
							<li>
								{currentUser ? <button onClick={handleLogout}>Log Out</button> : <Link to="/login">Login</Link> }
							</li>
						</MenuDropdown>
					</div>
					
        )
				}
				</div>
			</MenuBack>				
		</MenuBox>
	)
}

export default NavBar;