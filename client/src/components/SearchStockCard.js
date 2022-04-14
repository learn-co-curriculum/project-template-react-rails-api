import {useEffect, useState} from "react"

function SearchStockCard ({searchResponse, currentUser, userStocks, setUserStocks}) {
    const {Name, Symbol, LastPrice} = searchResponse
    const [newCompany, setNewCompany] = useState({})
   
    const noDollarSign = LastPrice?.slice(1)

    const newPrice = noDollarSign?.replaceAll(',','')

    const formattedPrice = parseFloat(newPrice)
    

    useEffect(() => {
        let newSearchCompany = {
            name: Name,
            symbol: Symbol
        }
        
        fetch("/companies", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(newSearchCompany)
        })
            .then(r => r.json())
            .then(r => {
                setNewCompany(r)
                
            }) 
            console.log(newSearchCompany)
    }, [])

    function handleAddStock () {
        window.alert('Added to Portfolio')
        let newStock = {
            name: Name,
            symbol: Symbol,
            price: formattedPrice,
            company_id: newCompany.id,
            user_id: currentUser.id
        }
        
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