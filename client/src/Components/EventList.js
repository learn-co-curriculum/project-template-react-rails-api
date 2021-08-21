import { useEffect } from "react"

const EventList = ({events, setEvents}) => {


    useEffect(() => {
        fetch("/events")
        .then(resp => resp.json())
        .then(data => setEvents(data))
    }, [setEvents(events)])

    return (
        <div>
            {events.length > 0 ? 
            (events.map(event => {
                return (
                <div className='event-card'>
                    <h2>{event.title}</h2>
                    <h2>{event.description}</h2>
                    <h2>{event.category}</h2>
                    <h2>{event.date}</h2>
                    <h2> time: {event.start_time} - {event.end_time}</h2>
           
                </div>
                )

            })) : (<h2>No Events</h2>)}
        </div>
    )
}

export default EventList
