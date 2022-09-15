import React from "react";

function ArtistCard({ artist }) {
  console.log(artist);
  return (
    <div className="artist-card">
      <h1 className="artist-name"> {artist.name} </h1>
      <div className="artist-stage"> {artist.stage} stage </div>
      <h4 className="artist-genre"> {artist.genre} </h4>
      <img src={artist.image} alt="" id="artist-pic" />
      <div className="bio-div"> {artist.bio} </div>
    </div>
  );
}

export default ArtistCard;
