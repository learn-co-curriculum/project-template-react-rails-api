import { useEffect } from "react"
import Event from "./Event"

import "./Event.css"

const EventList = ({events, setEvents, user}) => {
    



    return (
        <div className='event-card-container'>
            {events.length > 0 ? 
            (events.map(event => {
                return (
                    <Event 
                        key={event.id}
                        user={user}
                        event={event}
                    />
                )

            })) : (null)}
        </div>
    )
}

export default EventList
