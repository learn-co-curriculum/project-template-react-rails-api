import React from "react";
import Friend from "./Friend";

const Friends = ({ friends, setFriends }) => {
 

  const displayFriends = friends.map((friend) => {
    return (
      
 
      <Friend key={friend.id} friend={friend} allFriends={friends}setFriends={setFriends}/>


    );
  });

  return <div className='friend-card-container'>{displayFriends}</div>;
};

export default Friends;

