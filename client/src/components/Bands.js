import React from "react";
import BandContainer from "./BandContainer";
import FeaturedBandsContainer from "./FeaturedBandsContainer";

const Bands = ({ featuredBands, filteredBands, setBands }) => {
  return (
    <>
      <FeaturedBandsContainer bands={featuredBands} />
      <BandContainer bands={filteredBands} />
    </>
  );
};

export default Bands;
