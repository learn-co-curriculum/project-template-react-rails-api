import React from "react";

const FeaturedBandCard = ({ band, concerts }) => {
  debugger;
  return (
    <div>
      {concerts.length > 0 ? (
        <div>
          {band.name} {band.image_url}
        </div>
      ) : null}
    </div>
  );
};

export default FeaturedBandCard;
