import "./AddEvent.css"
import { useState } from 'react'



const AddEventForm = () => {
    const [eventTitle, setEventTitle] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')

    return (

    <div className='event-form-container'>
    <div className="add-event-form">
    
        <h4>Add Event</h4>
        <form>

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
        </div>

        <div>
            <label >End Time</label>
        </div>
        
        <div>
        <button type="submit" className="signup-btn">Add Event</button>
        <button type="submit" className="signup-btn">Cancel</button>
        </div>
          
        {/* <div>
        {errors.map((err) => (
            <div className="login-errors" key={err}>
            {err}
            </div>
        ))}
        </div> */}
        </form>
    </div>

    </div>
    )
}

export default AddEventForm
