import Friends from "../Components/Friends"
import Avatar from 'react-avatar'
import { useState,useEffect } from 'react'
import { FaChevronDown } from "react-icons/fa";


const FriendsPage = ({user}) => {

    const [friends, setFriends] = useState([]);
    const [friendResults, setFriendResults] = useState([])
    const [errors, setErrors] = useState([]);

    useEffect(() => {
      fetch("/friendships")
        .then((resp) => resp.json())
        .then((data) => setFriends(data));
    }, []);

    
    function findFriend(e){
        fetch(`/users?username=${e.target.value}` )
        .then(resp => resp.json())
        .then(data => setFriendResults(data))
    }

    function handleAddFriend(newFriend){
        fetch("/friendships", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                friend_a_id: user.id,
                friend_b_id: newFriend.id
            }),
          }).then((resp) => {
            if (resp.ok) {
              setFriends([...friends, newFriend])
            } else {
              resp.json().then((err) => setErrors(err.errors))
            }
          });
    }


    return (
        <div>
            <div className="search-div">
            <h1>Search for friends <FaChevronDown className='chevron-down-search'/></h1>
                <input
                className='search-input'
                type="search"
                placeholder="Search by username"
                onChange={findFriend}
                />

            {friendResults ? (friendResults.map(friend => {
                return (
                
                <div key={friend.id} className='searched-friend-div'>
                    <Avatar
                        round={true}
                        size={50}
                        className="search-avatar-photo"
                        name={friend.name}
                        color="lightGrey"
                    />
                    <h1>{friend.username}</h1>
                    <button className='add-friend-btn' onClick={() => handleAddFriend(friend)}>Add friend</button></div>
                )
                })) : (null)}
                </div>

              {/* <div>
              {errors.map((err) => (
                <div className="login-errors" key={err}>
                  {err}
                </div>
              ))}
            </div> */}

        
            <h1 className='friends-list-header'>Friends List</h1>
            <Friends friends={friends} setFriends={setFriends}/>

        </div>
    )
}

export default FriendsPage




      