import React from 'react';
import StarRating from "./StarRating";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const TrainerCard = ({ onUpdatedSpecialist, specialist, filters }) => {
	const { id, rating } = specialist;

	function handleUpdateRating(pct) {
		const newRating = pct * 5;
	
		fetch(`/specialists/${id}`, {
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
        <img top width="100%" style={{height: "13vw"}} src={specialist.image_url} alt="Card image cap"></img>
        </div>
        <div className="card-content">
        <div className="card-body">
          <h4>{specialist.name}</h4>
          </div>
          <div className="card-body">
          <p style={{color: "darkgrey"}}>About me: {specialist.about_me}</p>
          <p>Gender: {specialist.gender}</p>
          <p>Language: {specialist.language}</p>
      <div>
          Rating:{" "}
          <StarRating onClick={handleUpdateRating} percentage={specialist.rating / 5} />
        </div>
      <p>Specialty: {specialist.specialty}</p>
      <Link to="trainerschedular"> 
          <Button style={{backgroundColor: "#9D7E68"}}>Book Appointment</Button>
      </Link>
        </div>
        </div>
    </div>
	)
}

export default TrainerCard
