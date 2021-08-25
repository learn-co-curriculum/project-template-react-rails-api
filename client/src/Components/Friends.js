import React from "react";
import Friend from "./Friend";

const Friends = ({friends}) => {
 

  const displayFriends = friends.map((friend) => {
    return (
      
        <Friend key={friend.id} friend={friend} />
      
    );
  });

  return <>{displayFriends}</>;
};

export default Friends;

