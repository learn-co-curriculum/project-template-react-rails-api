import { useState, useEffect } from "react"

function StockCard ({stock, currentUser, setError, userStocks, setUserStocks}) {
    const {DisplayName, Symbol, LastValue} = stock 
    const [company, setCompany] = useState({})

    useEffect(() => {
        let newCompany = {
            name: DisplayName,
            symbol: Symbol
        }

        fetch("/companies", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(newCompany)
        })
            .then(r => r.json())
            .then(r => {
                setCompany(r)
                
            })     
    }, [])


    function handleAddStock () {
        window.alert('Added to Portfolio')
        let newStock = {
            name: DisplayName,
            symbol: Symbol,
            price: LastValue,
            company_id: company.id,
            user_id: currentUser.id
         }
                console.log(newStock)
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
    console.log(company)

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