import React, {useEffect, useState} from 'react'
import ArtistCard from "./ArtistCard"

function Lineup() {

  const [artists, setArtists] = useState([])

  
  useEffect(() => {
    fetch("/artists")
    .then((res) => res.json())
    .then((Arr) => {
    setArtists(Arr);
    });
    }, []);

    const artistArr = artists.map((artist)=> {
      return <ArtistCard key={artist.id} artist={artist} />
    }
    )

  return (

    <div>
     <ArtistCard /> 
    </div>
  )
}

export default Lineup