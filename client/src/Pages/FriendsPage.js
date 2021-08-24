import Friends from "../Components/Friends"
import { useState } from 'react'


const FriendsPage = () => {

    const [friendResults, setFriendResults] = useState([])
    
    function findFriend(e){
        fetch(`/users?username=${e.target.value}` )
        .then(resp => resp.json())
        .then(data => setFriendResults(data))
    }


    return (
        <div>
            <div className="search-div">
            <h1>Search for friends</h1>
                <input
                className='search-input'
                type="search"
                placeholder="Search by username"
                onChange={findFriend}
                />

            {friendResults ? (friendResults.map(friend => {
                return (
                    <div className='searched-friend-div'><h1>{friend.username}</h1><button className='add-friend-btn'>Add friend</button></div>
                )
            })) : (null)}

            </div>

            <h1>Friends</h1>
            <Friends />


        </div>
    )
}

export default FriendsPage
