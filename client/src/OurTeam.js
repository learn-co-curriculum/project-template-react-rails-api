import React, { useState, useEffect } from "react";
import AllVolunteers from "./AllVolunteers";
import NewVolunteerForm from "./NewVolunteerForm";
import { Container } from "semantic-ui-react";

function OurTeam() {
  const [volunteer, setVolunteer] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("/volunteers")
      .then((resp) => resp.json())
      .then((data) => setVolunteers(data));
  }, []);

  const addNewVolunteer = (newVolunteer) => {
    setVolunteer([...volunteer, newVolunteer]);
  };

  return (
    <Container>
      <h1></h1>
      <br />
      <NewVolunteerForm addNewVolunteer={addNewVolunteer} />
      <br />
      <AllVolunteers volunteer={volunteer} key={volunteer.id} />
      <br />
    </Container>
  );
}

export default OurTeam;
