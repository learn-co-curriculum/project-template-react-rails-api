import { FaChevronRight } from "react-icons/fa";
import Moment from "react-moment";
import EventCardDetails from "./EventCardDetails.js";

const Event = ({ user, event }) => {

  return (
    <>
        <div className="event-card">
            <h2>{event.title}</h2>

            <Moment titleFormat="MMM, D YYYY">{event.date}</Moment>

            <p className="view-container">
            View
            <FaChevronRight className="view-event-icon" />
            </p>
            <EventCardDetails event={event} user={user}/>
        </div>
    </>
  );
};

export default Event;
