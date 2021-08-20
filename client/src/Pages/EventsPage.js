import React from 'react'
import AddEventButton from '../Components/AddEvent/AddEventButton'
import AddEventForm from '../Components/AddEvent/AddEventForm'

const EventsPage = () => {
    return (
        <div>
            <h1>EVENTS</h1>
            <AddEventForm />
            <AddEventButton />
        </div>
    )
}

export default EventsPage
