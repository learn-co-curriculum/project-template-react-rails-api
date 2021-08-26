
import StandardLineBreak from "../StandardLineBreak";
import "./InviteFriend.css"
import InviteFriendsList from "./InviteFriendList";
import { useState, useEffect } from 'react'
import AttendeeList from "./AttendeeList";
import { FaChevronDown } from "react-icons/fa";


const InviteFriends = ({ event, user }) => {
    const [showInviteFriendsComponent,setShowInviteFriendsComponent] = useState(false)
    const [attendees,setAttendees] = useState([])


    useEffect(() => {
        fetch("/attendees")
        .then((resp) => resp.json())
        .then((data) => setAttendees(data));
    },[]);
 


    return (
        <>
        <h1>Invite Friends <FaChevronDown/></h1>
        <button className='view-friend-btn' onClick={() => setShowInviteFriendsComponent(!showInviteFriendsComponent)}>View Friends</button>
        {showInviteFriendsComponent ? (<InviteFriendsList event={event} user={user} attendees={attendees} setAttendees={setAttendees}
        />) : (null)}
        <AttendeeList attendees={attendees} setAttendees={setAttendees}/>
        </>
    )
}

export default InviteFriends
