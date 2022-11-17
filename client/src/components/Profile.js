import React from 'react'
import StubContainer from './StubContainer'
import UpcomingConcerts from './UpcomingConcerts'
import FavoritesContainer from './FavoritesContainer'

const Profile = ({user}) => {

  return (
    <div>
      <h2 className='page-header'>{user.first_name}'s profile</h2>
      {/* <UpcomingConcerts user={user}/> */}
      <FavoritesContainer genre_1={user.genre_1} genre_2={user.genre_2} genre_3={user.genre_3} favorite_band={user.favorite_band}/>
      <StubContainer user={user}/>
    </div>
  )
}

export default Profile
