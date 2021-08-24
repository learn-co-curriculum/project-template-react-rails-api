import { useState, useEffect } from "react";
import "./EventCardLarge.css";

const EventCardLarge = ({ event, user }) => {
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const [attendee, setAttendee] = useState([]);
  const [showAttendees, setShowAttendees] = useState(false);

  function handleAddComment(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        comment,
        event_id: event.id,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => setComment(data));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  useEffect(() => {
    fetch("/friendships")
      .then((resp) => resp.json())
      .then((data) => setAttendee(data));
  }, []);

  const displayAttendees = attendee.map((att) => {
    return (
      <>
        <h3 className="attendee-name">{att.name}</h3>
        <button className="invite-friend-btn">+</button>
      </>
    );
  });

  return (
    <div className="event-card-large">
      <h1 className="event-card-large-title">{event.title}</h1>
      <h1 className="event-card-large-description">
        Description: {event.description}
      </h1>
      <h1 className="event-card-large-date">Date: {event.date}</h1>
      <h1 className="event-card-large-time">
        Time: {event.start_time}-{event.end_time}
      </h1>
      <h1>Attendee List</h1>
      <button
        className="show-attendee-btn"
        onClick={() => setShowAttendees(!showAttendees)}
      >
        Show Attendees
      </button>
      {showAttendees ? displayAttendees : null}
      <h1>Budget</h1>
      <h1>To-Do's</h1>
      <h1>Comments</h1>
      <form onSubmit={handleAddComment}>
        <div className="comment-div">
          <input
            className="comment-input"
            placeholder="Write A Comment..."
            type="text"
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="add-comment-btn" type="submit">
            Add
          </button>
        </div>

        <div>
          {/* {errors.map((err) => (
            <div className="login-errors" key={err}>
              {err}
            </div>
          ))} */}
        </div>
      </form>
    </div>
  );
};

export default EventCardLarge;
