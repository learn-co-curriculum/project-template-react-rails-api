import React from "react";

function Search({ search, setSearch }) {
  return (
    <div>
      <input
        className="search-bar"
        id="search-bar"
        type="text"
        placeholder="Search Dishes..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;