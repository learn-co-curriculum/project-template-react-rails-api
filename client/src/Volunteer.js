import React from "react";

function Volunteer({ volunteer, onUpdateVolunteer }) {
  function handleUpdateVolunteers() {
    fetch("/volunteers/${volunteer.id}", 
    {  method: "PATCH",  
    headers: {    
      "Content-type": "application/json"  
    },  
    body: JSON.stringify({    
    title: "Corrected name"  
    }),
  }) 
  .then(response => {    
    console.log(response.status);     
    return response.json();  })  
  .then(data => console.log(data));
  }

    return (
    <li className="user-info">
      <span>{volunteer.name}</span>
      <button
        className={volunteer.name ? "remove" : "add"}
        onClick={handleUpdateVolunteers}
      >
        {volunteer.name ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}

export default Volunteer;
