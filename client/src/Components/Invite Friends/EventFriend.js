import React from 'react'
import Avatar from 'react-avatar'


const EventFriend = ({friend, handleInviteFriend, attendees, setAttendees, event, user}) => {


    const newAttendee = {
        name: friend.name,
        user_id: user.id,
        event_id: event.id
    }

    function handleInviteFriend(){

        fetch("/attendees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAttendee),
        }).then(setAttendees([...attendees, newAttendee]))
        
    }



    return (
        <div className='attendee-list'>
                          <Avatar
                        round={true}
                        size={50}
                        className="search-avatar-photo"
                        name={friend.name}
                        color="lightGrey"
                    />
            <p>{friend.name}</p>
            <button onClick={() => handleInviteFriend()}className='invite-friend-btn'>Invite</button>
        </div>
    )
}

export default EventFriend
