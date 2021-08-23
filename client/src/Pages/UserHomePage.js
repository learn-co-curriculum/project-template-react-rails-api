import Avatar from 'react-avatar'
import { FaCameraRetro } from "react-icons/fa";
import EditPhotoForm from '../Components/EditPhotoForm';
import { useState } from 'react'
import Linebreakhomepage from '../Components/Linebreakhomepage'


const UserHomePage = ({ user }) => {

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
            
        </div>
    )
}

export default UserHomePage
