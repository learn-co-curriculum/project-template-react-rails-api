import { useEffect, useState } from "react";

function VolunteerActivities() {
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

  let activityDisplay = activities
    ? activities.map((a) => (
        <div className="card activity-card">
          <img className="card-img-top" src={a.image} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{a.organization}</h5>
            <p className="card-text">
              {a.activity_name}: {a.activity_description}
            </p>
            <div className="card-footer">
              <a href="#" className="btn btn-header btn-footer">
                Sign Up Now!
              </a>
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
