import React from 'react'


function ArtistCard({artist}) {

console.log(artist)
  return (
<div className = 'artist-card'>
    <div> {artist.name} </div>
    <div> {artist.genre} </div>
    <img src= {artist.image} alt=''/> 
    <div> {artist.bio} </div>
    <div> {artist.stage} </div>
  
</div>
  )
}

export default ArtistCard