import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Login = () => {
	const [ loginData, setLoginData ] = useState({
		username: "",
		password: "",
	})

	const [errors, setErrors] = useState([])
	const history = useHistory()

	function onSubmit(e){
			e.preventDefault()
			const patient = {
					username,
					password
			}
			// Logs in patient
			fetch(`/login`,{
				method:"POST",
				headers:{"Content-Type": "application/json"},
				body:JSON.stringify(patient)
			})
			.then(res => {
					if(res.ok){
							res.json().then(patient => {
									history.push(`/appointments`)
							})
					}else {
							res.json().then(json => setErrors(json.errors))
					}
			})
	}

	const handleChange = (e) => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }

	return(
		<>
			<form onSubmit={onSubmit}>
				<label> Username </label>
				<input type="text" name="username" value= {username} onChange={handleChange}/>

				<label> Password </label>
				<input type="text" name="password" value={password} onChange={handleChange}/>

				<input type="submit" value="Login" />
			</form>
			{errors? <div>{errors}</div> : null}
			<button>Sign Up</button>
			{/* <Button as = {Link}> </Button> */}
		</>
	)
}

export default Login