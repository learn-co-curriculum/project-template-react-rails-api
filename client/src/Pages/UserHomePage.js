import Avatar from 'react-avatar'
import { FaCameraRetro } from "react-icons/fa";
import EditPhotoForm from '../Components/EditPhotoForm';
import { useState, useEffect } from 'react'
import Linebreakhomepage from '../Components/Linebreakhomepage'
import FriendEventList from '../Components/FriendsEvents/FriendEventList';





const UserHomePage = ({ user }) => {
    const [friendsEvents, setFriendsEvents] = useState([])

    useEffect(() => {
        fetch('/friendships')
        .then(resp => resp.json())
        .then(data => setFriendsEvents(data))
    },[])

    const [showEditPhotoForm, SetShowEditPhotoForm] = useState(false)

    function handleEditPhotoForm(){
        SetShowEditPhotoForm(!showEditPhotoForm)
    }


    return (
        <div>
            <div className='homepage-banner'>
                {showEditPhotoForm ? (<><EditPhotoForm /><FaCameraRetro onClick={handleEditPhotoForm} /> </>) : (<FaCameraRetro onClick={handleEditPhotoForm} /> )}
                { user.user_photo.includes("https://") ? (<Avatar 
                    round={true}
                    size={130}
                    className='avatar-photo'
                    src={user.user_photo}
                    />) : (<Avatar 
                        round={true}
                        size={130}
                        className='avatar-photo'
                        name={user.name}
                        color="lightGrey"
                        />)}

                <h3 className='welcomeback-header'>Welcome, {user.name}</h3>
            </div>
            <Linebreakhomepage />
            <h1>Events</h1>
            <h1>Friends Event's</h1>
            <button>View Friends Event's</button>
            <FriendEventList friendsEvents={friendsEvents}/>       
        </div>
    )
}

export default UserHomePage
