import { useEffect } from "react"
import Event from "./Event"

import "./Event.css"

const EventList = ({events, setEvents, user}) => {


    useEffect(() => {
        fetch("/events")
        .then(resp => resp.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className='event-card-container'>
            {events.length > 0 ? 
            (events.map(event => {
                return (
                    <Event user={user}event={event}/>
                )

            })) : (<h2>No Events</h2>)}
        </div>
    )
}

export default EventList
