
import { FaChevronRight } from "react-icons/fa";



const EventCard = ({event, setShowDetails, showDetails}) => {

    let eventDate = new Date(event.date);

    let fmt = new Intl.DateTimeFormat("en", {
      year: "numeric",
      weekday: "long",
      day: "numeric",
      month: "short",
    });

    return (
        <div className='event-card'>
            <h2>{event.title}</h2>
            <p>{`${fmt.format(eventDate)}`}</p>
            <div className="view-container">
              <p onClick={() => setShowDetails(!showDetails)}>
                View Details
                <FaChevronRight className="view-event-icon" />
              </p>
            </div>
        </div>
    )
}

export default EventCard
