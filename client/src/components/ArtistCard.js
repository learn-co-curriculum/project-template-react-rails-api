import React from "react";

function ArtistCard({ artist }) {
  console.log(artist);
  return (
    <div className="artist-card">
      <h1> {artist.name} </h1>
      <h4> {artist.genre} </h4>
      <img src={artist.image} alt="" />
      <div className="bio-div"> {artist.bio} </div>
      <div> {artist.stage} stage </div>
    </div>
  );
}

export default ArtistCard;
