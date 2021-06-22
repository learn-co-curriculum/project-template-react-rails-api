import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


const Therapist = (props) => {

	return (
		<div>
		<h1 style={{textAlign: "center", fontFamily: "fantasy", fontWeight: "bold", fontSize: "50px", color: "#9D7E68"}}>Therapy</h1>
		<div className="therapy-container">
		<div style={{ marginTop: "20px", width: "30%"}}>
		<Card style={{border: "none"}}>
			<CardHeader style={{fontFamily: "Permanent Marker, cursive", fontWeight: "bold", backgroundColor: "#9D7E68", fontSize: "20px", color: "white"}}>About Our Therapists</CardHeader>
			<CardBody>
			  <CardTitle tag="h5">Learn more about our Therapists</CardTitle>
			  <CardText>Wholeness- offers it's members one of the top world's best psychologist. We understand being healthy doesn't only stem from the physical aspect but also mental so we offer our members the option to speak with one of our therapists. You can sort the therapist based on their gender or language they speak. </CardText>
			  {/* <select onChange={props.onChangeType}> */}
			  <FormGroup onChange={props.onChangeType}>
			<Label for="exampleSelect">Select Gender:</Label>
			<Input type="select" name="select" id="exampleSelect">
			  <option>--Select--</option>
			  <option>Female</option>
			  <option>Male</option>
			</Input>
		  </FormGroup>
			  <FormGroup onChange={props.onChangeType}>
			<Label for="exampleSelect">Select language:</Label>
			<Input type="select" name="select" id="exampleSelect">
			  <option>--Select--</option>
			  <option>English</option> 
			  {/* 3 english speaking */}
			  <option>Spanish</option>
			  {/* 3 spanish speaking */}
			  <option>French</option>
			  {/* 2 french speaking */}
			  <option>Italian</option>
			  {/* 2 italina speaking */}
			  <option>German</option>
			  {/* 2 german speaking */}
			</Input>
		  </FormGroup>
			  {/* </select> */}
			  <div style={{marginTop: "5px"}}>
			  <FormGroup check>
			  <Label check>
				<Input type="radio" name="radio1" />{' '}
				I want the highest rated therapist
			  </Label>
			</FormGroup>
			  </div>
			  <Link to="/psychologists">
			  <Button style={{backgroundColor: "#9D7E68", marginTop: "10px"}} onClick={props.onFilter}>Book Appointments</Button>
			  </Link>
			</CardBody>
			<CardFooter style={{backgroundColor: "#9D7E68", color: "white"}}>Licensed Therapist</CardFooter>
		  </Card>
		</div> 
		</div>  
		</div>
	)
}

export default Therapist
