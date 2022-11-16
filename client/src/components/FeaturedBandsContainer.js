import React from "react";
import FeaturedBandCard from "./FeaturedBandCard";

const FeaturedBandsContainer = ({ bands }) => {
  const featuredBands = bands.map((band) => {
    let filteredConcerts = band.concerts.filter(
      (concert) =>
        Date.parse(concert.date) > Date.now() &&
        Date.parse(concert.date) < Date.now() + 12096e5

    );

    return (
      <FeaturedBandCard concerts={filteredConcerts} key={band.id} band={band} />
    );
  });

  //   const featuredBand = bands.map((band) => <FeaturedBandCard />);
  //   console.log(bands);

  return <div>{featuredBands}</div>;
};

export default FeaturedBandsContainer;
