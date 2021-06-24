import React from 'react'
import ProfileCard from './ProfileCard'


const ProfilePage = ({ profiles, onDeleteProfile }) => {
	return (
		<div className="specialist-collection">
   {profiles.map((profile) => {
				return <ProfileCard 
				onDeleteProfile={onDeleteProfile}
				profile={profile} 
				key={profile.id}	
				/>
				})}
    </div>
	)
}

export default ProfilePage
