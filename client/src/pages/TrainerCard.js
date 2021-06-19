import React from 'react';
import StarRating from "./StarRating";
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const TrainerCard = ({ specialist }) => {
	return (

	<div className="card-container">
      <div className="image-container">
        <img top width="100%" src={specialist.image_url} alt="Card image cap"></img>
        </div>
        <div className="card-content">
        <div className="card-title">
          <h4>Name: {specialist.name}</h4>
          </div>
          <div className="card-body">
          <p>About me: {specialist.about_me}</p>
          <p>Language: {specialist.language}</p>
      <div>
          Rating:{" "}
          <StarRating percentage={specialist.rating / 5} />
        </div>
      <p>Specialty: {specialist.specialty}</p>
      <Link to="trainerschedular"> 
          <Button>Book Appointment</Button>
      </Link>
        </div>
        </div>
    </div>
	)
}

export default TrainerCard
