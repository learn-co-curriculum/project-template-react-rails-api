import React from "react";
import BandContainer from "./BandContainer";
import FeaturedBandsContainer from "./FeaturedBandsContainer";
import AddBand from "./AddBand";

const Bands = ({ featuredBands, filteredBands, onAddBand }) => {
  return (
    <>
      <FeaturedBandsContainer bands={featuredBands} />
      <BandContainer bands={filteredBands} />
      <AddBand onAddBand={onAddBand} />
    </>
  );
};

export default Bands;
