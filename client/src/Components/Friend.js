const Friend = ({ friend }) => {

  function handleDeleteFriend(friend){
    fetch(`/friendships/${friend.id}`, {
      method: "DELETE"
    })
  }


  return (
    <div>
      <h1>{friend.username}</h1>
      <button onClick={() => handleDeleteFriend(friend)}>Remove friend</button>
    </div>
  );
};

export default Friend;




        