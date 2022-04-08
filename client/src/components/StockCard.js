function StockCard ({stock, currentUser, setError, userStocks, setUserStocks}) {
    const {DisplayName, Symbol, LastValue} = stock
    // console.log(stock)
// no sector in api options :(
    //prob remove sector, performance, from backend
    //function to find company id, find company with matching symbol and get id from a fetch of companies
    function handleAddStock () {
        window.alert('Added to Portfolio')
        let newStock = {
            name: DisplayName,
            symbol: Symbol,
            price: LastValue,
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
            <div>{DisplayName}</div>
            <div>{Symbol}</div>
            <div>{LastValue}</div>
            <button className="button" onClick={handleAddStock}>Add to Portfolio</button>
        </div>
    )
}

export default StockCard