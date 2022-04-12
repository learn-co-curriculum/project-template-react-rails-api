function SearchStockCard ({searchResponse, currentUser, userStocks, setUserStocks}) {
    const {Name, Symbol, LastPrice} = searchResponse
    // console.log(stock)
    // no sector in api options :(
    //prob remove sector, performance, from backend
    //function to find company id, find company with matching symbol and get id from a fetch of companies

    const noDollarSign = LastPrice?.slice(1)

    const newPrice = noDollarSign?.replaceAll(',','')

    const formattedPrice = parseFloat(newPrice)
    


    function handleAddStock () {
        window.alert('Added to Portfolio')
        let newStock = {
            name: Name,
            symbol: Symbol,
            price: formattedPrice,
            performance_over_time: 1,
            sector: "IT",
            company_id: 1,
            user_id: currentUser.id
        }
        // console.log(newStock)
        fetch("/user_stocks", {
            method: "POST",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(newStock)
        })
        .then(r => r.json())
        .then(r => {
            setUserStocks([...userStocks, r])
        })
    }

    return(
        <div>
            <div>{Name}</div>
            <div>{Symbol}</div>
            <div>{LastPrice}</div>
            {Name ? <button className="button" onClick={handleAddStock}>Add to Portfolio</button> : null }
        </div>
    )
}

export default SearchStockCard