import React from 'react'

const FriendEvent = ({event, friend}) => {

    console.log(friend)
    const displayFriendsEvents = friend.map(event => {
        console.log(event)
        return (
            <div>
            <h1>{event.title}</h1>
            <h1>{event.description}</h1>
            <h1>{event.date}</h1>
            </div>
        )
    })

    return (
        <div>
            <h1>{displayFriendsEvents}</h1>
        </div>
    )
}

export default FriendEvent
