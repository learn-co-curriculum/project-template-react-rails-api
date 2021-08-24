import Friends from "../Components/Friends"
import { useState } from 'react'

const FriendsPage = () => {

    const [friendResults, setFriendResults] = useState([])
    
    

    function findFriend(e){
        fetch(`/users?username=${e.target.value}` )
        .then(resp => resp.json())
        .then(data => setFriendResults(data))
    }

    console.log(friendResults)


    return (
        <div>
            <h1>Search for friends</h1>
            <div className="header__search">
                <input
                type="search"
                placeholder="Search by username"
                onChange={findFriend}
                />

            {friendResults ? (friendResults.map(friend => {
                return (
                    <><h1>{friend.username}</h1><button>Add friend</button></>
                )
            })) : (null)}

            </div>

            <h1>Friends</h1>
            <Friends />


        </div>
    )
}

export default FriendsPage
