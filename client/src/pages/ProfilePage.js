import React from 'react'


const ProfilePage = ({ profile }) => {
	const {weight, desired_weight, bmi, exercise, therapy} = profile
	return (
		<div className="card-container">
		  <div className="card-content">
		  <div className="card-body">
			<p>Weight: {weight}</p>
			</div>
			<div className="card-body">
			<p>Desired Weight: {desired_weight}</p>
			<p>Current BMI: {bmi}</p>
			<p>Exercise Per Week: {exercise}</p>
			<p>Therapy Per Month: {therapy}</p>
			<button style={{backgroundColor: "#9D7E68"}}>Update Profile</button>
		  </div>
		  </div>
	  </div>
	)
}

export default ProfilePage
