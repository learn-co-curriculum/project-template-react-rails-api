import Budget from "../Budget/Budget";
import AddCommentForm from "../Comments/AddCommentForm";
import CommentsList from "../Comments/CommentsList";
import ToDos from "../To-do's/ToDos";
import InviteFriends from "../Invite Friends/InviteFriends";
import { useEffect, useState } from "react";
import "@formatjs/intl-datetimeformat/locale-data/en";
import "./EventCardDetails.css"




const EventCardDetails = ({ event, user, setShowDetails }) => {
  const [commentResults, setCommentResults] = useState([]);

  useEffect(() => {
    fetch("/comments")
      .then((resp) => resp.json())
      .then((data) => setCommentResults(data));
  }, []);


  let eventDate = new Date(event.date);

  let fmt = new Intl.DateTimeFormat("en", {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="event-card-details">
      <button onClick={() => setShowDetails(false)}>X</button>
      <h1 className="event-card-details-title">{event.title}</h1>
      <h1 className="event-card-details-description">
        Description: {event.description}
      </h1>
      {/* <h1 className="event-card-details-date">Date: {event.date}</h1> */}
      <h1 className="event-card-details-date">
        Date: {`${fmt.format(eventDate)}`}
      </h1>

      <h1 className="event-card-details-time">
        Time: {event.start_time}-{event.end_time}
      </h1>
      <div className='event-navbar-container'>
        
      <div className='fasdfa'><InviteFriends event={event} user={user}/></div>
      <Budget event={event} user={user}/>
      <ToDos event={event} user={user} />
      <CommentsList commentResults={commentResults} />
      <AddCommentForm
        commentResults={commentResults}
        setCommentResults={setCommentResults}
        user={user}
        event={event}
      />
      </div>
    </div>
  );
};

export default EventCardDetails;
