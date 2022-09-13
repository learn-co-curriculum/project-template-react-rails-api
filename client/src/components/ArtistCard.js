import React from 'react'


function ArtistCard({ artist }) {

  console.log(artist)
  return (
    <div className='artist-card'>
      <h1> {artist.name} </h1>
      <div> {artist.genre} </div>
      <img src={artist.image} alt='' />
      <div> {artist.bio} </div>
      <div> {artist.stage} stage </div>

    </div>
  )
}

export default ArtistCard