import { useState } from "react"
import SearchStockCard from "./SearchStockCard";

function Query ({currentUser, userStocks, setUserStocks}) {
    const [search, setSearch] = useState("") 
    const [searchResponse, setSearchResponse] = useState(null)
   
    function handleSearchForm (e) {
        e.preventDefault()
        fetch(`https://schwab.p.rapidapi.com/quote/get-summary?symbol=${search}`, {
            method: 'GET',
            headers: {
            'X-RapidAPI-Host': 'schwab.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
            }
        })
            .then(response => response.json())
            .then(response => setSearchResponse(response.QuoteOutput))
            .catch(err => console.error(err));
    }
    console.log(searchResponse)

    return(
        <div>
            <form className="form" onSubmit={handleSearchForm}>
                <label>Find a stock</label>
                <input type="text" placeholder="Enter a symbol" onChange={(e) => setSearch(e.target.value)}></input>
                <input className="button" type="submit" value="Search"></input>
            </form>
            {searchResponse ? <SearchStockCard  
                currentUser={currentUser}
                userStocks={userStocks}
                setUserStocks={setUserStocks}
                searchResponse={searchResponse}/> 
              : null}
        </div>
    )
}

export default Query