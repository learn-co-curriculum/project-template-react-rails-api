import React from 'react'
import FriendEvent from './FriendEvent'

const FriendEventList = ({friendsEvents}) => {


    const allFriends = friendsEvents.map(friend => {
        return (

            <FriendEvent key={friend.id} friend={friend.events}/>
        )
    })

    return (
        <div>
            {allFriends}
        </div>
    )
}

export default FriendEventList
