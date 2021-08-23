import React from 'react'
import { useState, useEffect } from 'react'
import Avatar from 'react-avatar'


const Friends = () => {
    const [friends, setFriends] = useState([])

 useEffect(() => {
     fetch('/friendships')
     .then(resp => resp.json())
     .then(data => setFriends(data))
 }, [])

 const friendsList = []

 const displayFriends = friends.map(friend => {
        friendsList.push(friend)
})

const allFriends = friendsList.map(friend => {
    return (
        <>
        {friend.friend_b.user_photo.includes("https://") ? (<Avatar 
                    round={true}
                    size={130}
                    className='avatar-photo'
                    src={friend.friend_b.user_photo}
                    />) : ((<Avatar 
                        round={true}
                        size={100}
                        className='avatar-photo'
                        name={friend.friend_b.name}
                        color="lightGrey"
                        />))}
        </>
        )
})


    return (
        <>
            {allFriends}
        </>
    )
}

export default Friends
