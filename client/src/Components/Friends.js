import React from "react";
import { useState, useEffect } from "react";
import Avatar from "react-avatar";
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
        <Friend friend={friend} />
        {friend.user_photo.includes("https://") ? (
          <Avatar
            round={true}
            size={40}
            className="avatar-photo"
            src={friend.user_photo}
          />
        ) : (
          <Avatar
            round={true}
            size={40}
            className="avatar-photo"
            name={friend.name}
            color="lightGrey"
          />
        )}
      </>
    );
  });
  return <h1>{displayFriends}</h1>;
};

export default Friends;

// has_many :initiated_friends

// has_many :requested_friendship
