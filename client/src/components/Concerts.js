import React from "react";
import ConcertContainer from "./ConcertContainer";
import SearchBar from "./SearchBar";

const Concerts = ({
  bands,
  user,
  concerts,
  setConcerts,
  venues,
  setVenues,
  displayedBands,
  displayedVenues,
  search,
  setSearch,
  showUserConcerts,
  setShowUserConcerts
}) => {
  return (
    <div>
      <h2 className="page-header">Concerts</h2>
      <SearchBar
        displayedBands={displayedBands}
        displayedVenues={displayedVenues}
        search={search}
        setSearch={setSearch}
      />
      <ConcertContainer
        user={user}
        bands={bands}
        concerts={concerts}
        setConcerts={setConcerts}
        venues={venues}
        setVenues={setVenues}
        showUserConcerts={showUserConcerts}
        setShowUserConcerts={setShowUserConcerts}
      />
    </div>
  );
};

export default Concerts;
