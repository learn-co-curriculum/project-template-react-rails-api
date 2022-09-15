import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react'
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

	return(
		<div>
			{!menu ? (
          <div onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu size={30} />
          </div>
        ) : (
          <ul>
            <li onClick={() => setMenu(!menu)}><GiHamburgerMenu size={30} /></li>
            <li>
              {currentUser ? <Link to={`/appointments`}>Your Appointments</Link> : <Link to="/signup">Sign Up</Link> }
            </li>
            <li>
							{currentUser ? <button onClick={handleLogout}>Log Out</button> : <Link to="/login">Login</Link> }
            </li>
          </ul>
        )}
		</div>
	)
}

export default NavBar;