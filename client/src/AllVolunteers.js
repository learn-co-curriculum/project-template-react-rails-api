import React from "react";
import OurTeam from "./OurTeam";

function AllVolunteers({ volunteer }) {
  return (
    <div>
      {volunteer.map((newVolunteer) => (
        <OurTeam volunteer={newVolunteer} key={newVolunteer.id} />
      ))}
    </div>
  );
}

export default AllVolunteers;
