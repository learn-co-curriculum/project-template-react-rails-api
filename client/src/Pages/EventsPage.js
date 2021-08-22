import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal';
import AddEventForm from '../Components/AddEvent/AddEventForm'
import EventList from '../Components/Event_and_style/EventList';

const EventsPage = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [events, setEvents] = useState([])


    function openModal(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    return (
        <div>
            <h1 className='events-page-header'>EVENTS</h1>
            <button className='add-event-btn' onClick={openModal}>Add Event</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <AddEventForm setModalIsOpen={setModalIsOpen} events={events} setEvents={setEvents}/>
            </Modal>
            <EventList events={events} setEvents={setEvents}/>
        </div>
    )
}

export default EventsPage
