import React from 'react';
import wellness from './wellness.jpg';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';



const Wellness = (props) => {
  
return (

    <div>
    <h1 style={{textAlign: "center", fontFamily: "fantasy", fontWeight: "bold", fontSize: "50px"}}>Wellness</h1>
    <div style={{display: "block", textAlign: "center"}}>
    <img style={{height: "900px", width: "90%"}} src={wellness} />
    </div>
    <div style={{ marginTop: "20px"}}>
    <Card>
        <CardHeader style={{fontFamily: "Permanent Marker, cursive", fontWeight: "bold", fontSize: "20px"}}>About Our Trainers</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Learn more about our Trainer's</CardTitle>
          <CardText>Wholeness- offers it's members one of the top world's best personal trainers. We understand our members come from a wide range of demographical backgrounds so we worked hard to make sure there is a trainer that can communicate with each member's language preference. You can sort trainer's based on rating, gender, and language. </CardText>
          <div>
          <FormGroup>
        <Label for="exampleSelect">Select Gender:</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>--Select--</option>
          <option>Female</option>
          <option>Male</option>
        </Input>
      </FormGroup>
          </div>
          <div>
          <FormGroup>
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
          </div>
          <div style={{marginTop: "5px"}}>
          <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            I want the highest rated trainer
          </Label>
        </FormGroup>
          </div>
          <Link to="/trainers">
          <Button style={{marginTop: "10px"}}>Book Appointments</Button>
          </Link>
        </CardBody>
        <CardFooter>Licensed Trainers</CardFooter>
      </Card>
    </div> 
    </div>  
  )
}

export default Wellness
