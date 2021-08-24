import React from "react";
import { useState, useEffect } from "react";
import Avatar from "react-avatar";
import Friend from "./Friend";

const Friends = ({friends}) => {
 


  const displayFriends = friends.map((friend) => {
    return (
      <>
        <Friend 
        key={friend.id}
        friend={friend} />
      </>
    );
  });
  
  return <>{displayFriends}</>;
}

export default Friends;

