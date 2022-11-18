import React, { useState, useEffect } from "react";
import NewVolunteerForm from "./NewVolunteerForm";
// import Volunteer from "./Volunteer";
import { Container } from "semantic-ui-react";

function OurTeam() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("/volunteers")
      .then((resp) => resp.json())
      .then((volunteers) => setVolunteers(volunteers));
  }, []);


  function handleAddVolunteer(newItem) {
    console.log("work", newItem);
  }

  return (
    <Container>
      <NewVolunteerForm handleAddVolunteer={handleAddVolunteer} />
      <br />
      {/* <Volunteer updateVolunteer={updateVolunteer}/> */}
    </Container>
  );
}

export default OurTeam;
