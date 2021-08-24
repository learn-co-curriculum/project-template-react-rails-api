import AttendeeList from "../AttendeeList";
import Budget from "../Budget/Budget";
import AddCommentForm from "../Comments/AddCommentForm";
import CommentsList from "../Comments/CommentsList";
import ToDos from "../To-do's/ToDos";

const EventCardDetails = ({ event, user }) => {

  return (
    <div className="event-card-details">
        <h1 className="event-card-details-title">{event.title}</h1>
        <h1 className="event-card-details-description">
          Description: {event.description}
        </h1>
        <h1 className="event-card-details-date">Date: {event.date}</h1>
        <h1 className="event-card-details-time">
          Time: {event.start_time}-{event.end_time}
        </h1>

        <AttendeeList /> 
        <Budget />
        <ToDos />
        <CommentsList user={user}/>
        <AddCommentForm user={user} event={event}/>
    </div>
  );
};

export default EventCardDetails;
