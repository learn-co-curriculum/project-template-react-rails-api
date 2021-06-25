import React from 'react'
import ProfileCard from './ProfileCard'


const ProfilePage = ({ profiles, onDeleteProfile, updateProfile, user}) => {
	return (
		<div className="specialist-collection">
   {profiles.map((profile) => {
				return <ProfileCard 
				user={user}
				onDeleteProfile={onDeleteProfile}
				profile={profile} 
				key={profile.id}
				updateProfile={updateProfile}	
				/>
				})}
    </div>
	)
}

export default ProfilePage
