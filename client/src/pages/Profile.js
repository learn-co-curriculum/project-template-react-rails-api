import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom'

const initialState = {
	weight: "",
	desired_weight: "",
	bmi: "",
	exercise: "",
	therapy: ""
  };
const Profile = ({ onAddProfile, history, user }) => {
	const [formData, setFormData] = useState(initialState);


	function handleChange(e) {
		setFormData({
		  ...formData,
		  [e.target.id]: e.target.value,
		});
	  }

	  function handleSubmit(e) {
		e.preventDefault();
		console.log(formData)
		fetch("/profiles", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({...formData, user_id: user.id}),
		})
		  .then((r) => r.json())
		  .then((newProfile) => {
			setFormData(initialState);
			onAddProfile(newProfile);
		  });
		  console.log("hey")
		  history.push('/myprofile')
	  }
	return (
		<div className="card">
		<h2>Create Your Profile</h2>
		<form onSubmit={handleSubmit}>
		   <label htmlFor="weight">Enter Your Weight:</label>
		   <input 
		   type="number"
			id="weight"
			value={formData.weight}
			onChange={handleChange}
		   />
		   <p>make sure this is in lbs</p>
		 <div style={{marginTop: "10px"}}>
		   <label htmlFor="desired_weight">Enter Your Desired Weight Goal:</label>
		   <input 
		   type="number"
		   id="desired_weight"
		   value={formData.desired_weight}
		   onChange={handleChange}
		    />
		   <p>sweet, you can definitely do it</p>
		 </div>
		 <div style={{marginTop: "10px"}}>
		   <label htmlFor="bmi">Enter your BMI (body mass index):</label>
		   <input 
		   type="number"
		   id="bmi"
		   value={formData.bmi}
		   onChange={handleChange} 
		   />
		   <a style={{textDecoration: "none", fontSize: "12px", color: "#9D7E68"}} href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" target="blank">Calculate BMI here if you don't know it</a>
		 </div>
        <Label htmlFor="range" style={{marginTop: "5px", marginBottom: "5px" }}>How close are you to achieving your health goal?</Label>
		<span style={{fontSize: "10px", marginRight: "5px"}}> <br /> not satisfied🥲</span> 
        <Input type="range" name="range" id="exampleRange" />
		<span style={{fontSize: "10px", marginRight: "5px"}}> pretty satisfied😁</span> 
		 <div className="position-relative" style={{marginTop: "10px"}}>
		   <label htmlFor="exercise">How often do you exercise?</label>
		   <input 
		   input ="number"
		   id="exercise"
		   value={formData.exercise}
		   onChange={handleChange}
		    />
		   <FormText>write the number of days you work-out per week</FormText>
		 </div>
		 <div className="position-relative" style={{marginTop: "10px"}}>
		   <label htmlFor="therapy">How often do you see a therapist?</label>
		   <input 
		   input ="number"
		   id="therapy"
		   value={formData.therapy} 
		   onChange={handleChange}
		   />
		   <FormText>write the number of sessions per month</FormText>
		 </div>
	   <Button style={{backgroundColor: "#9D7E68"}}>
         Submit
	   </Button>
	   </form>
	   </div>
	)
}

export default withRouter(Profile);
