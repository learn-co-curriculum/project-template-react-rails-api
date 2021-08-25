import React from 'react'
import Avatar from 'react-avatar'


const EventFriend = ({friend, handleInviteFriend}) => {
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
            <button onClick={() => handleInviteFriend(friend)}className='invite-friend-btn'>Invite</button>
        </div>
    )
}

export default EventFriend
