
import StandardLineBreak from "../StandardLineBreak";
import "./InviteFriend.css"
import InviteFriendsList from "./InviteFriendList";
import { useState, useEffect } from 'react'
import AttendeeList from "./AttendeeList";

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
        <h1>Invite Friends</h1>
        <button onClick={() => setShowInviteFriendsComponent(!showInviteFriendsComponent)}>View Friends</button>
        {showInviteFriendsComponent ? (<InviteFriendsList event={event} user={user} attendees={attendees} setAttendees={setAttendees}
        />) : (null)}
        <AttendeeList attendees={attendees} setAttendees={setAttendees}/>



        {/* <StandardLineBreak /> */}
        {/* {viewAttendeeList ? (<h1>Invite friends <FaChevronDown onClick={() => setViewAttendeeList(!viewAttendeeList)}/></h1>
        ) : (<h1>Invite friends <FaChevronRight onClick={() => setViewAttendeeList(!viewAttendeeList)}/></h1>
        )}

        {viewAttendeeList ? (
        <>
            <button className="show-attendee-btn" onClick={() => setShowAttendees(!showAttendees)}>
                Invite friends
            </button>
        </>
        ) : (null)}

        {showAttendees ? displayAttendees : null}
        <h1>Attending</h1> */}
        </>
    )
}

export default InviteFriends
