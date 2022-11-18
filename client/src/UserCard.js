import { useEffect, useState } from "react";
import { format } from "date-fns";

function UserCard({ user }) {
  const [displayUser, setDisplayUser] = useState(null);
  useEffect(() => {
    fetch(`/volunteer/${user.id}`)
      .then((r) => r.json())
      .then(setDisplayUser);
  }, []);

  console.log(displayUser);
  const display = displayUser ? (
    <div className="container-fluid home-container">
      <div className="row home-row">
        <div className="col-sm-5 user-profile">
          <p className="home-text-title user-title">
            Volunteer: {displayUser.name}
          </p>
          <p className="user-text">Age: {displayUser.age}</p>
          <p className="user-text">Email: {displayUser.email}</p>
        </div>
        <div className="col-sm-7 home-text">
          <p className="home-text-title">Active Signups</p>
          {displayUser.signups.map((a) => (
            <p>
              {
                displayUser.activities.find((b) => b.id === a.activity_id)
                  .organization
              }
              : {format(new Date(a.dateTime), "MMMM dd, yyyy @ h:mmaaa")}
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : null;
  return display;
}

export default UserCard;
