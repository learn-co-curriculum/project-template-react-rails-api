import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VolunteerActivities({ user }) {
  const navigate = useNavigate();
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    fetch(`/activities`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setActivities(d);
      });
  }, []);

  function handleSignup(a) {
    const newSignup = {
      volunteer_id: user.id,
      activity_id: a.target.value,
      dateTime: "2022-12-01T07:36:54-06:00",
    };
    fetch("/signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSignup),
    })
      .then((r) => r.json())
      .then(navigate(`/user/`));
  }

  let activityDisplay = activities
    ? activities.map((activity) => (
        <div className="card activity-card">
          <img className="card-img-top" src={activity.image} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{activity.organization}</h5>
            <p className="card-text">
              {activity.activity_name}: {activity.activity_description}
            </p>
            <div className="card-footer">
              <button
                href="#"
                value={activity.id}
                className="btn btn-header btn-footer"
                onClick={(a) => handleSignup(a)}
              >
                Sign Up Now!
              </button>
            </div>
          </div>
        </div>
      ))
    : null;

  return (
    <>
      <div className="page-top-container">
        <img
          src={"/images/page-top-image.jpg"}
          className="page-top-image"
          alt="page top"
        />
        <h3 className="page-title-text volunteer-title-text">
          Volunteer Activities
        </h3>
      </div>
      <div className="card-container">{activityDisplay}</div>
    </>
  );
}

export default VolunteerActivities;
