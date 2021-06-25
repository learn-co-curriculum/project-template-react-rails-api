import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ProfileCard = ({ profile, onDeleteProfile, updateProfile, history, user }) => {
		const {id, weight, desired_weight, bmi, exercise, therapy} = profile
		const [edit, setEdit] = useState({
			id: null,
			value: ''
		  });
		
		  function handleDeleteProfile() {
			  fetch(`/profiles/${id}`, {
				  method: "DELETE",
				}).then((r) => {
					if (r.ok) {
						onDeleteProfile(profile);
					}
				});
			}
			const submitUpdate = value => {
			  updateProfile(edit.id, value);
			  setEdit({
				id: null,
				value: ''
			  });
			};
			if (edit.id) {
				fetch(`/profiles/${id}`, {
					method: "DELETE",
				  }).then((r) => {
					  if (r.ok) {
						  onDeleteProfile(profile);
						}
						history.push('/profile')
					});
				
			}

		return (
			<div className="profile-container">
			<h1 style={{backgroundColor: "white"}}>{user.username}'s Profile </h1>
			<center>
			  <Card style={{width: "30%", marginTop: "50px"}}>
			  <CardBody>
				<CardText>Weight: {weight}</CardText>
				<CardText>Desired Weight: {desired_weight}</CardText>
				<CardText>Current BMI: {bmi}</CardText>
				<CardText>Exercise Per Week: {exercise}</CardText>
				<CardText>Therapy Per Month: {therapy}</CardText>
				<Button style={{backgroundColor: "#9D7E68", marginRight: "10px"}} onClick={handleDeleteProfile}>Delete Profile</Button>
				<Button style={{backgroundColor: "#9D7E68"}} onClick={() => setEdit({ id: id })}>Edit Profile</Button>
				</CardBody>
				</Card>
				</center>
		  </div>
	)
}

export default withRouter(ProfileCard)
