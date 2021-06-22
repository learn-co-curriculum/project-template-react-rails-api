import React from 'react';
import StarRating from "./StarRating";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { checkPropTypes } from 'prop-types';

const TherapistCard = ({ onUpdatedSpecialist, psychologist, filters, onSubmitPyschologist }) => {
	const { id, rating } = psychologist;

	function handleUpdateRating(pct) {
		const newRating = pct * 5;
	
		fetch(`/psychologists/${id}`, {
		  method: "PATCH",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({ rating: newRating }),
		})
		  .then((r) => r.json())
		  .then(onUpdatedSpecialist);
	  }

	return (

	<div className="card-container">
      <div className="image-container">
        <img top width="100%" style={{height: "13vw"}} src={psychologist.image_url} alt="Card image cap"></img>
        </div>
        <div className="card-content">
        <div className="card-body">
          <h4>{psychologist.name}</h4>
          </div>
          <div className="card-body">
          <p style={{color: "darkgrey"}}>About me: {psychologist.about_me}</p>
          <p>Gender: {psychologist.gender}</p>
          <p>Language: {psychologist.language}</p>
      <div>
          Rating:{" "}
          <StarRating onClick={handleUpdateRating} percentage={psychologist.rating / 5} />
        </div>
      <p>Specialty: {psychologist.specialty}</p>
      <Link to="therapistschedular"> 
          <Button style={{backgroundColor: "#9D7E68"}}>Book Appointment</Button>
      </Link>
        </div>
        </div>
    </div>
	)
}

export default TherapistCard