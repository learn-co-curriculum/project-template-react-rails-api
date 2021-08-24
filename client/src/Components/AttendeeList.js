import { useEffect, useState } from "react";

const AttendeeList = () => {
    const [showAttendees, setShowAttendees] = useState(false);
    const [attendee, setAttendee] = useState([]);

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
        <>
        <h1>Attendee List()</h1>
        <button
            className="show-attendee-btn"
            onClick={() => setShowAttendees(!showAttendees)}
        >
            Show Attendees
        </button>
        {showAttendees ? displayAttendees : null}
        </>
    )
}

export default AttendeeList
