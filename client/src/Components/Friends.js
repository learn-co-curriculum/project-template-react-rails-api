import React from "react";
import { useState, useEffect } from "react";
// import Avatar from "react-avatar";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friendships")
      .then((resp) => resp.json())
      .then((data) => setFriends(data));
  }, []);

  const displayFriends = friends.map((friend) => {
    return (
      <>
        <Friend key={friend.id} friend={friend} />
      </>
    );
  });

  return <>{displayFriends}</>;
};

export default Friends;
