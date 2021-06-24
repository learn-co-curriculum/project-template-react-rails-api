import React from 'react'

const ProfileCard = ({ profile, onDeleteProfile }) => {
		const {id, weight, desired_weight, bmi, exercise, therapy} = profile

		function handleDeleteProfile() {
			fetch(`/profiles/${id}`, {
			  method: "DELETE",
			}).then((r) => {
			  if (r.ok) {
				onDeleteProfile(profile);
			  }
			});
		  }

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
				<button style={{backgroundColor: "#9D7E68"}} onClick={handleDeleteProfile}>Delete Profile</button>
			  </div>
			  </div>
		  </div>
	)
}

export default ProfileCard
