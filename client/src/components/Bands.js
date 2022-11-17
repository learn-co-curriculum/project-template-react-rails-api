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
      <h3>FEATURED BANDS</h3>
      <FeaturedBandsContainer bands={featuredBands} />
      <h3>MY BANDS</h3>
      <BandContainer bands={filteredBands} />
      <h3>ADD A BAND</h3>
      <AddBand onAddBand={onAddBand} />
    </>
  );
};

export default Bands;
