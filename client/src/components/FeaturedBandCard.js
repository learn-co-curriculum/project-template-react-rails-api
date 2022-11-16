import React from "react";

const FeaturedBandCard = ({ band, concerts }) => {
  return (
    <div>
      {concerts.length > 0 ? (
        <div>
          {band.name}
          <img src={band.image_url} alt={band.name} />
        </div>
      ) : null}
    </div>
  );
};

export default FeaturedBandCard;
