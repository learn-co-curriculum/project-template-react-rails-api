import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";

function Lineup() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("/artists")
      .then((res) => res.json())
      .then((Arr) => {
        setArtists(Arr);
      });
  }, []);

  const artistArr = artists.map((artist) => {
    return <ArtistCard key={artist.id} artist={artist} />;
  });
  console.log(artists);

  return (
    <div className="nav-container">
      <h1 className="headline"> LINEUP </h1>
      <div className="artist-container">{artistArr}</div>
    </div>
  );
}

export default Lineup;
