import UserProfile from "./UserProfile";
import { Card } from "semantic-ui-react";

function AllVolunteers({ volunteers }) {
  return (
    <Card.Group itemsPerRow={3}>
      <h1>Meet Our Wonderful Team</h1>
      {volunteers
        ? volunteers.map((volunteer) => (
            <UserProfile volunteer={volunteer} key={volunteer.id} />
          ))
        : null}
    </Card.Group>
  );
}

export default AllVolunteers;
