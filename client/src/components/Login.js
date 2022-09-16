import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { ContentGrid } from "../styles/Grid.style";
import UserForm from "../styles/Form.style"
import Button from "../styles/Button.style"

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
		<ContentGrid>
			<UserForm>
				<h2>Login</h2>
				<form onSubmit={onSubmit}>
					<div>
						<input type="text" name="username" placeholder="Username" value= {username} onChange={handleChange}/>

						<input type="password" name="password" placeholder= "Password" onChange={handleChange}/>
						
						<Button type="submit" value="Login">Login</Button>
						
					</div>
				</form>
				{errors? <div>{errors}</div> : null}
				<p>Not a Member? <Link to='/signup'>Sign up!</Link></p>
			</UserForm>
		</ContentGrid>
	)
}

export default Login