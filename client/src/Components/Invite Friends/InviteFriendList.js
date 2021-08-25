import { useState, useEffect } from 'react'
import EventFriend from './EventFriend';

const InviteFriendsList = ({handleInviteFriend}) => {
    // const [viewAttendeeList, setViewAttendeeList] = useState(false);
    // const [showAttendees, setShowAttendees] = useState(false);
    const [eventFriends, setEventFriends] = useState([]);

    useEffect(() => {
        fetch("/friendships")
          .then((resp) => resp.json())
          .then((data) => setEventFriends(data));
      }, []);

    
     const eventFriendsList = eventFriends.map((friend) => {
        return (
            <EventFriend 
                key={friend.username}
                friend={friend}
                handleInviteFriend={handleInviteFriend}
            />
        );
      });

      return <ul className='event-friends-list'>{eventFriendsList}</ul>
      
}

export default InviteFriendsList
