import React from 'react';
import StarRating from "./StarRating";
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
//    t.string :image_url
//   t.string :name
//   t.string :about_me
//   t.string :language
//   t.float :rating
//   t.string :specialty 

// function handleUpdateRating(id, pct) {
//     const newRating = pct * 5;
//     fetch(`/spices/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ rating: newRating }),
//     })
//       .then((r) => r.json())
//       .then();
//   }



const TrainerCard = ({ specialist }) => {

  return (
      <div className="card-container">
      {/* <div className="image-container">
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
          <Button onClick={()=> console()}>Book Appointment</Button>
      </Link>
        </div>
        </div> */}
    </div>
    
  )
}

export default TrainerCard;