import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function UserCard({ user, handleLogoutClick }) {
  const navigate = useNavigate();
  const [displayUser, setDisplayUser] = useState(null);
  const [activeSignups, setActiveSignups] = useState(null);

  console.log(displayUser);

  useEffect(() => {
    fetch(`/volunteer/${user.id}`)
      .then((r) => r.json())
      .then((d) => {
        setDisplayUser(d);
        setActiveSignups(d.signups);
      });
  }, []);

  function handleDelete(id) {
    fetch(`/signups/${id}`, {
      method: "DELETE",
    }).then(() => {
      let newArray = activeSignups.filter((s) => s.id != id);
      setActiveSignups(newArray);
    });
  }

  let displaySignups = activeSignups ? (
    activeSignups.length > 0 ? (
      activeSignups.map((a) => (
        <p key={a.id}>
          {
            displayUser.activities.find((b) => b.id === a.activity_id)
              .organization
          }
          : {format(new Date(a.dateTime), "MMMM dd, yyyy @ h:mmaaa")}{" "}
          <button onClick={(e) => handleDelete(a.id)}>Cancel?</button>
        </p>
      ))
    ) : (
      <>
        <p>None listed</p>
        <button
          className="btn btn-header"
          onClick={() => navigate(`/activities/`)}
        >
          Why don't you sign up for something?
        </button>
      </>
    )
  ) : null;

  const display = displayUser ? (
    <div className="container-fluid user-container">
      <div className="row home-row">
        <div className="col-sm-5 user-profile">
          <p className="home-text-title user-title">
            Volunteer: {displayUser.name}
          </p>
          <p className="user-text">Age: {displayUser.age}</p>
          <p className="user-text">Email: {displayUser.email}</p>
          <button onClick={() => handleLogoutClick()}>Logout</button>
        </div>
        <div className="col-sm-7 home-text">
          <p className="home-text-title">Active Signups</p>
          <div className="active-signups">{displaySignups}</div>
        </div>
      </div>
    </div>
  ) : null;
  return display;
}

export default UserCard;
