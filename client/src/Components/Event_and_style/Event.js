
import EventCardDetails from "./EventCardDetails.js";
import { useState } from "react";
import EventCard from "./EventCard.js";

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
      <div>
        {showDetails ? (
          <EventCardDetails
            event={event}
            user={user}
            setShowDetails={setShowDetails}
          />
        ) : (<EventCard showDetails={showDetails} setShowDetails={setShowDetails} event={event}/>)}
      </div>
    </>
  );
};

export default Event;
