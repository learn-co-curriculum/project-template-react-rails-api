import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';



const Wellness = (props) => {
  
return (

    <div>
    <h1 style={{textAlign: "center", fontFamily: "fantasy", fontWeight: "bold", fontSize: "50px", color: "#9D7E68"}}>Wellness</h1>
    <video style={{height: "45vw"}} src='/video/wellness.mp4' autoPlay loop muted/>
    <div style={{width: "30%"}}>
    <form onSubmitTrainer={props.onSubmitTrainer}>
    <Card style={{border: "none", marginTop: "0px"}}>
        <CardHeader style={{fontFamily: "Permanent Marker, cursive", fontWeight: "bold", backgroundColor: "#9D7E68", fontSize: "20px", color: "white"}}>About Our Trainers</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Learn more about our Trainers</CardTitle>
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
          <Button style={{backgroundColor: "#9D7E68", marginTop: "10px"}} onClick={props.filter}>Book Appointments</Button>
          </Link>
        </CardBody>
        <CardFooter style={{backgroundColor: "#9D7E68", color: "white"}}>Licensed Trainers</CardFooter>
      </Card>
    </form>
    </div> 
    </div>  
  )
}

export default Wellness
