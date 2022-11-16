import React from "react";

const BandCard = ({ band }) => {
  return (
    <>
      <h1>{band.name}</h1>
      <img src={band.image_url} alt={band.name} />
      <p>{band.genre}</p>
      <p>{band.secondary_genre}</p>
      <p>{band.hometown}</p>
    </>
  );
};

export default BandCard;
