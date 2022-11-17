import React from "react";

function Volunteer({ volunteer, onUpdateVolunteer }) {
  function handleAddToVolunteers() {
    // Call onUpdateVolunteer, passing the data returned from the fetch request
    fetch(`http://localhost:4000/volunteers/${volunteer.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Reese, not sure what to put here
      }),
    })
      .then((r) => r.json())
      .then((updatedVolunteer) => onUpdateVolunteer(updatedVolunteer));
  }

  return (
    <li className="user-info">
      <span>{volunteer.name}</span>
      <button
        className={volunteer.name ? "remove" : "add"}
        onClick={handleAddToVolunteers}
      >
        {volunteer.name ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}

export default Volunteer;
