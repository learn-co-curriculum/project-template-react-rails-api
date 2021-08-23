
const EventCardLarge = ({ event }) => {
    return (
        <div className='event-card-large'>
            <h1>{event.title}</h1>
            <h1>{event.description}</h1>
            <h1>{event.date}</h1>
            <h1>Time: {event.start_time}-{event.end_time}</h1>

        <form>
        <div>
          <label className="password-label">
           Add a comment 
          </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          <button type="submit">
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
    )
}

export default EventCardLarge
