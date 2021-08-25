import Attendee from "./Attendee"

const AttendeeList = ({attendees, setAttendees}) => {

    const attendeeList = attendees.map(att => {
        return (
            <Attendee attendee={att}/>
        )
    })


    return (
        <div>
            <h2>Attending</h2>
            {attendeeList}
        </div>
    )
}

export default AttendeeList
