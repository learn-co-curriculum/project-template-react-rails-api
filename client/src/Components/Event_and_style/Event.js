import { FaChevronRight } from "react-icons/fa";
import Moment from 'react-moment';
import EventCardLarge from "./EventCardLarge";
import { useState } from 'react'


const Event = ({ event }) => {

    const [isViewCardShowing, setIsViewCardShowing] = useState(false)
 
    function handleViewEvent(){
        setIsViewCardShowing(!isViewCardShowing)
    }


    return (
        <>
                <div className='event-card'>
                    <h2>{event.title}</h2>
                
                    <Moment titleFormat="MMM, D YYYY">
                        {event.date}
                    </Moment>


                    <p className='view-container' onClick={handleViewEvent}>View<FaChevronRight className='view-event-icon'/></p>
                </div>
                {isViewCardShowing ? (<EventCardLarge event={event} />) : (null)}
   
        </>
    )
}

export default Event
