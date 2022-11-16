import { useState } from 'react';

function SearchBar({ search, setSearch }) {
    return (
        <div className='search'>
            <input className='search-input'
                type='text'
                id='search'
                placeholder='Search by band, venue, or city'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;
