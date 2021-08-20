
const AddEventForm = () => {
    return (
    <div className="signup-form">
        <form>
            
        <div>
        <label className="name-label">Event Title</label>
        <input
            className="name-input"
            type="text"
            id="name"
            autoComplete="off"

            />
        </div>

        <div>
        <label className="username-label">Category</label>
        <input
            className="username-signup-input"
            type="text"
            id="username"
            autoComplete="off"

             />
        </div>
          
        <div>
        <label className="avatar-label">Date</label>
            <input
            className="avatar-input"
            type="text"
            id="signup-avatar"
            autoComplete="off"
 
             />
        </div>

        <div>
        <button type="submit" className="signup-btn">Add Event</button>
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
