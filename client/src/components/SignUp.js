import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ContentGrid } from "../styles/Grid.style";
import UserForm from "../styles/Form.style"
import Button from "../styles/Button.style"

const SignUp = () => {

	const [ signupData, setSignupData ] = useState({
		username: "",
		password: "",
		password_confirmation: "",
		email: "",
		full_name: "",
		age: "",
		address: "",
		phone: "",
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
			<UserForm>
			<h2>Sign Up</h2>
				<form onSubmit={onSubmit}>
					{/* <label> Username </label> */}
					<input type="text" name="username" value= {username} placeholder= "Username" onChange={handleChange}/>

					{/* <label> Password </label> */}
					<input type="password" name="password" value={password} placeholder="Password" onChange={handleChange}/>

					{/* <label> Confirm Password </label> */}
					<input type="password" name="password_confirmation"  placeholder="Confirm Password"value={password_confirmation} onChange={handleChange}/>

					{/* <label> Full Name </label> */}
					<input type="text" name="full_name" value={full_name}  placeholder="Full Name"onChange={handleChange}/>

					{/* <label> Email </label> */}
					<input type="text" name="email" value={email}  placeholder="Email" onChange={handleChange}/>

					{/* <label> Age </label> */}
					<input type="text" name="age" value={age}  placeholder="Age" onChange={handleChange}/>

					{/* <label> Address </label> */}
					<input type="text" name="address" value={address} placeholder= "Address"onChange={handleChange}/>

					{/* <label> Phone </label> */}
					<input type="text" name="phone" value={phone} placeholder= "Phone Number" onChange={handleChange}/>
{/* 
					<label> Avatar </label>
					<input type="text" name="avatar_url" value={avatar_url}  placeholder="Avatar" onChange={handleChange}/> */}

					<Button type="submit" value="Signup">Sign Up</Button>
				</form>
				{errors? <div>{errors}</div> : null}
			</UserForm>
		</ContentGrid>
	)
}

export default SignUp;