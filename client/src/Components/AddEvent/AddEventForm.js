import "./AddEvent.css"

const AddEventForm = () => {

    return (
    <div className="add-event-form">
    
        <h4>Add Event</h4>
        <form>
            
        <div>
        <label className="name-label">Event Title</label>
        <input
            id="add-event-input"
            type="text"
            autoComplete="off"

            />
        </div>

        <div>
        <label className="username-label">Category</label>
        <select id='add-event-input' name="cars">
            <option value="volvo"> - Select - </option>
            <option value="saab">Awards or Recognition</option>
            <option value="mercedes">Class or Course</option>
            <option value="mercedes">Competition or Tournament</option>
            <option value="mercedes">Concert</option>
            <option value="mercedes">Convention</option>
            <option value="mercedes">Dinner</option>
            <option value="mercedes">Exhibit or Tradeshow</option>
            <option value="mercedes">Festival</option>
            <option value="mercedes">Meeting</option>
            <option value="mercedes">Networking</option>
            <option value="mercedes">Party or Celebration</option>
            <option value="mercedes">Retreat or Trip</option>
            <option value="mercedes">Seminar</option>
            <option value="mercedes">Tasting</option>
            <option value="mercedes">Tour</option>
            <option value="mercedes">Wedding</option>
            <option value="audi">Other</option>
        </select>
        </div>
   

        <div>
        <label className="avatar-label">Date</label>
            <input
             id="add-event-input"
            type="text"
            autoComplete="off"
 
             />
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
    )
}

export default AddEventForm
