import React from 'react'
import { useState } from 'react'
import AddEventForm from '../Components/AddEvent/AddEventForm'

const EventsPage = () => {

    const [showAddEventForm, setShowAddEventForm] = useState(false)

    function handleAddEventForm(){
        setShowAddEventForm(!showAddEventForm)
    }

    return (
        <div>
            <h1>EVENTS</h1>
            <button onClick={handleAddEventForm}>Add event</button>
            { showAddEventForm ? (<AddEventForm />) : (null)}
        </div>
    )
}

export default EventsPage
