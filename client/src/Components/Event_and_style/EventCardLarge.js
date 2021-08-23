import { useState } from 'react'


const EventCardLarge = ({ event, user }) => {

    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([]);


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
        <div className='event-card-large'>
            <h1>{event.title}</h1>
            <h1>{event.description}</h1>
            <h1>{event.date}</h1>
            <h1>Time: {event.start_time}-{event.end_time}</h1>

        <form onSubmit={handleAddComment}>
        <div>
          <label className="password-label">
           Write a comment 
          </label>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
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
