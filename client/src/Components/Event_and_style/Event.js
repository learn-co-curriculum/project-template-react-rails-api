import { FaChevronRight } from "react-icons/fa";
import Moment from "react-moment";
import EventCardDetails from "./EventCardDetails.js";
import { useState } from "react";

const Event = ({ user, event }) => {
  const [showDetails, setShowDetails] = useState(false);

  let eventDate = new Date(event.date);

  let fmt = new Intl.DateTimeFormat("en", {
    year: "numeric",
    weekday: "long",
    month: "short",
    day: "2-digit",
  });

  return (
    <>
      <div className="event-card">
        {showDetails ? (
          <EventCardDetails
            event={event}
            user={user}
            setShowDetails={setShowDetails}
          />
        ) : (
          <>
            {" "}
            <h2>{event.title}</h2>
            <p>{`${fmt.format(eventDate)}`}</p>
            <div className="view-container">
              <p onClick={() => setShowDetails(!showDetails)}>
                View Details
                <FaChevronRight className="view-event-icon" />
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Event;
