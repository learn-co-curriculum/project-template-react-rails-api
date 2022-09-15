import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Login = ({updateUser}) => {
	const [ loginData, setLoginData ] = useState({
		username: "",
		password: "",
	})

	const [errors, setErrors] = useState([])
	const history = useHistory()

	const {username, password} = loginData

	function onSubmit(e){
			e.preventDefault()
			const user = {
					username,
					password
			}
			// Logs in user
			fetch(`/login`,{
				method:"POST",
				headers:{"Content-Type": "application/json"},
				body:JSON.stringify(user)
			})
			.then(res => {
					if(res.ok){
							res.json().then(user => {
									updateUser(user)
									user.admin ? history.push(`/providers`) : history.push(`/appointments`)
							})
					}else {
							res.json().then(json => setErrors(json.errors))
					}
			})
	}

	const handleChange = (e) => { 
		setLoginData({ ...loginData, [e.target.name]: e.target.value }) }

	return(
		<>
			<form onSubmit={onSubmit}>
				<label> Username </label>
				<input type="text" name="username" value= {username} onChange={handleChange}/>

				<label> Password </label>
				<input type="password" name="password" onChange={handleChange}/>

				<input type="submit" value="Login" />
			</form>
			{errors? <div>{errors}</div> : null}
			
			{<Link to='/signup'>
				Sign Up
			</Link>}
		</>
	)
}

export default Login