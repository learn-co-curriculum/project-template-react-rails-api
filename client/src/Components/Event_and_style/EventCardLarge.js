
import { useState } from 'react'
import "./EventCardLarge.css";


const EventCardLarge = ({ event, user }) => {

    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])

    console.log()


    function handleAddComment(e){
        e.preventDefault()
        setErrors([])
        fetch("/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
                comment,
                event_id: event.id
            }),
          }).then((resp) => {
            if (resp.ok) {
              resp.json().then((data) => setComment(data));
            } 
            else {
              resp.json().then((err) => setErrors(err.errors))
            }
          });
    }

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
      <h1>Budget</h1>
      <h1>To-Do's</h1>
      <h1>Comments</h1>

        <form onSubmit={handleAddComment}>
        <div>
          <input
            placeholder="Write A Comment..."
            type="text"
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Add</button>
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
