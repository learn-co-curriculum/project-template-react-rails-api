import "./AddEvent.css"
import { useState } from 'react'


const AddEventForm = ({setModalIsOpen, events, setEvents}) => {
    const [eventTitle, setEventTitle] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [errors, setErrors] = useState([]);
    
    const newEvent = {
        title: eventTitle,
        description: eventDescription,
        category,
        date,
        start_time: startTime,
        end_time: endTime
      }


    function handleAddEvent(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEvent),
        }).then((resp) => {
          if (resp.ok) {
            setEvents([...events, newEvent])
            setModalIsOpen(false)
          } else {
            resp.json().then((err) => setErrors(err.errors))
          }
        });
      }



    return (
    <>
    <div className="add-event-form">
    
        <h4>Add Event</h4>
        <form onSubmit={handleAddEvent}>

        <div>
            <label className="name-label">Event Title</label>
            <input
                id="add-event-input"
                type="text"
                autoComplete="off"
                onChange={(e) => setEventTitle(e.target.value)}
            />
        </div>

        <div>
            <label className="name-label">Event Description</label>
            <input
                id="add-event-input"
                type="text"
                autoComplete="off"
                onChange={(e) => setEventDescription(e.target.value)}
            />
        </div>

        <div>
        <label className="username-label">Category</label>
            <select id='add-event-input' name="cars" onChange={(e) => setCategory(e.target.value)}>
                <option value=""> - Select - </option>
                <option value="Awards or Recognition">Awards or Recognition</option>
                <option value="Class or Course">Class or Course</option>
                <option value="Competition or Tournament">Competition or Tournament</option>
                <option value="Concert">Concert</option>
                <option value="Convention">Convention</option>
                <option value="Dinner">Dinner</option>
                <option value="Exhibit or Trade show">Exhibit or Trade show</option>
                <option value="Festival">Festival</option>
                <option value="Meeting">Meeting</option>
                <option value="Networking">Networking</option>
                <option value="Party or Celebration">Party or Celebration</option>
                <option value="Retreat or Trip">Retreat or Trip</option>
                <option value="Seminar">Seminar</option>
                <option value="Tasting">Tasting</option>
                <option value="Tour">Tour</option>
                <option value="Wedding">Wedding</option>
                <option value="Other">Other</option>
            </select>
        </div>

   
        <div>
            <label className="avatar-label">Date</label>
            <input type="date" id="add-event-input" onChange={(e) => setDate(e.target.value)} />
        </div>

        <div>
            <label >Start Time</label>
            <input type="text" id="add-event-input" onChange={(e) => setStartTime(e.target.value)} />

        </div>

        <div>
            <label >End Time</label>
            <input type="text" id="add-event-input" onChange={(e) => setEndTime(e.target.value)} />

        </div>
        
        <div>
        <button type="submit" className="signup-btn" >Add Event</button>
        <button className="cancel-btn" onClick={() => setModalIsOpen(false)}>Cancel</button>
        </div>
          
        <div>
        {errors.map((err) => (
            <div className="login-errors" key={err}>
            {err}
            </div>
        ))}
        </div>

        </form>
    </div>
    </>
    )
}

export default AddEventForm
