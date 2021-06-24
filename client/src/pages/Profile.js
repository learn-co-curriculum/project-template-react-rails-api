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
const Profile = ({ onAddProfile, history }) => {
	const [formData, setFormData] = useState(initialState);


	function handleChange(e) {
		setFormData({
		  ...formData,
		  [e.target.id]: e.target.value,
		});
	  }

	  function handleSubmit(e) {
		e.preventDefault();
		// fetch("/profile", {
		//   method: "POST",
		//   headers: {
		// 	"Content-Type": "application/json",
		//   },
		//   body: JSON.stringify(formData),
		// })
		//   .then((r) => r.json())
		//   .then((newProfile) => {
		// 	setFormData(initialState);
		// 	onAddProfile(newProfile);
		//   });
		  console.log("hey")
		  history.push('/myprofile')
	  }
	return (
		<Form onSubmit={handleSubmit}>
		<FormGroup>
		   <Label for="weight">Enter Your Weight:</Label>
		   <Input type="number"/>
		   <FormText>make sure this is in lbs</FormText>
		 </FormGroup>
		 <FormGroup style={{marginTop: "10px"}}>
		   <Label for="desired_weight">Enter Your Desired Weight Goal:</Label>
		   <Input type="number" />
		   <FormText>sweet, you can definitely do it</FormText>
		 </FormGroup>
		 <FormGroup style={{marginTop: "10px"}}>
		   <Label for="bmi">Enter your BMI (body mass index):</Label>
		   <Input type="text" />
		   <a style={{textDecoration: "none", fontSize: "12px", color: "#9D7E68"}} href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" target="blank">Calculate BMI here if you don't know it</a>
		 </FormGroup>
		 <FormGroup>
        <Label for="range" style={{marginTop: "5px", marginBottom: "5px" }}>How close are you to achieving your health goal?</Label>
		<span style={{fontSize: "10px", marginRight: "5px"}}> <br /> not satisfied🥲</span> 
        <Input type="range" name="range" id="exampleRange" />
		<span style={{fontSize: "10px", marginRight: "5px"}}> pretty satisfied😁</span> 
      </FormGroup>
		 <FormGroup className="position-relative" style={{marginTop: "10px"}}>
		   <Label for="exercise">How often do you exercise?</Label>
		   <Input input ="text" />
		   <FormText>write the number of days you work-out per week</FormText>
		 </FormGroup>
		 <FormGroup className="position-relative" style={{marginTop: "10px"}}>
		   <Label for="therapy">How often do you see a therapist?</Label>
		   <Input input ="text" />
		   <FormText>write the number of sessions per month</FormText>
		 </FormGroup>
		 {/* <Link to="/myprofile"> */}
	   <Button style={{backgroundColor: "#9D7E68"}}>
         Submit
	   </Button>
	   {/* </Link> */}
	   </Form>
	)
}

export default withRouter(Profile);
