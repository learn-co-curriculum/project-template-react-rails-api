import React from "react";
import BandContainer from "./BandContainer";
import FeaturedBandsContainer from "./FeaturedBandsContainer";
import AddBand from "./AddBand";
import SearchBar from './SearchBar'

const Bands = ({ featuredBands, filteredBands, onAddBand, displayedBands, displayedVenues, search, setSearch }) => {
  return (
    <>
    <h2 className="page-header">Bands</h2>
      <SearchBar displayedBands={displayedBands} displayedVenues={displayedVenues} search={search} setSearch={setSearch}/>
      <FeaturedBandsContainer bands={featuredBands} />
      <BandContainer bands={filteredBands} />
      <AddBand onAddBand={onAddBand} />
    </>
  );
};

export default Bands;
