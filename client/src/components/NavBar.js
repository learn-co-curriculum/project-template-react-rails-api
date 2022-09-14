import { useHistory } from 'react-router-dom'

const NavBar = ({updatePatient, currentPatient}) => {

	const history = useHistory()

	const handleLogout = (e) => {
		fetch(`/logout`, {
			method: 'DELETE'
		})
			.then(() => {
				updatePatient("")
				history.push('/login')
			})
	}

	return(
		<div>
			NavBar
			{currentPatient ? <button onClick={handleLogout}>Log Out</button> : null}
		</div>
	)
}

export default NavBar;