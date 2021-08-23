import "./EventCardLarge.css";

const EventCardLarge = ({ event }) => {
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

      <form>
        <div>
          <input
            placeholder="Write A Comment..."
            className="event-card-large-comment-input"
            type="password"
            id="password"
            autoComplete="current-password"
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
