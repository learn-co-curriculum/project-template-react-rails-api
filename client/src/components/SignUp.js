import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ContentGrid } from "../styles/Grid.style";

const SignUp = () => {

	const [ signupData, setSignupData ] = useState({
		username: "",
		password: "",
		password_confirmation: "",
		email: "",
		full_name: "",
		age: 0,
		address: "",
		phone: 0,
		avatar_url: ""
	})

	const [errors, setErrors] = useState([])
	const history = useHistory()

	const {
		username, 
		password, 
		password_confirmation,
		full_name,
		email,
		age,
		address,
		phone,
		avatar_url
	} = signupData

	function onSubmit(e){
			e.preventDefault()
			const use = {
				username,
				password,
				password_confirmation,
				full_name,
				email,
				age,
				address,
				phone,
				avatar_url
			}
			// Logs in use
			fetch(`/signup`,{
				method:"POST",
				headers:{"Content-Type": "application/json"},
				body:JSON.stringify(use)
			})
			.then(res => {
					if(res.ok){
							res.json().then( () => {
								history.push(`/login`)
							})
					}else {
							res.json().then(json => setErrors(json.errors))
					}
			})
	}

	const handleChange = (e) => { setSignupData({ ...signupData, [e.target.name]: e.target.value }) }

	return(
		<ContentGrid>
			<form onSubmit={onSubmit}>
				<label> Username </label>
				<input type="text" name="username" value= {username} onChange={handleChange}/>

				<label> Password </label>
				<input type="password" name="password" value={password} onChange={handleChange}/>

				<label> Confirm Password </label>
				<input type="password" name="password_confirmation" value={password_confirmation} onChange={handleChange}/>

				<label> Full Name </label>
				<input type="text" name="full_name" value={full_name} onChange={handleChange}/>

				<label> Email </label>
				<input type="text" name="email" value={email} onChange={handleChange}/>

				<label> Age </label>
				<input type="text" name="age" value={age} onChange={handleChange}/>

				<label> Address </label>
				<input type="text" name="address" value={address} onChange={handleChange}/>

				<label> Phone </label>
				<input type="text" name="phone" value={phone} onChange={handleChange}/>

				<label> Avatar </label>
				<input type="text" name="avatar_url" value={avatar_url} onChange={handleChange}/>

				<input type="submit" value="Signup" />
			</form>
			{errors? <div>{errors}</div> : null}
			{/* <Button as = {Link}> </Button> */}
		</ContentGrid>
	)
}

export default SignUp;