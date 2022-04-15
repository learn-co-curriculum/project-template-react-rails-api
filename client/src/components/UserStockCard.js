import Chart from "./Chart"
import { useEffect, useState } from "react"

function UserStockCard ({stock, handleDeleteStock, setUserStocks, userStocks}) {
    const {name, symbol, price, id} = stock
    
    const [showChart, setShowChart] = useState(false)
    const [fetchData, setFetchData] = useState([])
    const [updatedPrice, setUpdatedPrice] = useState("")
    const [singleStock, setSingleStock] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [updateError, setUpdateError] = useState(null)
    const [values, setValues] = useState([])
    const [keys, setKeys] = useState([])
    const [currentPrice, setCurrentPrice] = useState(null)


    useEffect(() => {
        fetch(`/user_stocks/${id}`)
            .then(r => r.json())
            .then(r => setSingleStock(r))
    }, [])
  
    
    function handleDelete () {
        fetch(`/user_stocks/${id}`, {
            method: "DELETE"
        })
        .then(r => {
           handleDeleteStock(id)
        })
    }

    function handleEditFormSubmit (e) {
        e.preventDefault()

        const updatedStock = {
            name: name,
            symbol: symbol,
            price: updatedPrice,
            company_id: singleStock?.company.id,
            user_id: singleStock?.user.id
        }

        fetch(`/user_stocks/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedStock)
        })
            .then(r => r.json())
            .then(r => {
                if (r.errors) {
                    setUpdateError(r.errors)
                } else {
                    const updatedStocks = userStocks.map((stock) => {
                        if (stock.id === r.id) {
                            return r
                        } else {
                            return stock
                        }
                    })
                    setUserStocks(updatedStocks)
                    setUpdateError(null)
                    setUpdatedPrice("")
                    setShowForm(false)
                }
                // console.log(r)
            })
    }

    function handleShowChart () {
        setShowChart(true)
        if (!showChart) {
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`, {
            method: 'GET',
            headers: {'User-Agent': 'request'}
        })
            .then(r => r.json())
            .then(r => { 
                if (r["Time Series (Daily)"]) {
                    console.log("response", r["Time Series (Daily)"])
                    setFetchData(r["Time Series (Daily)"])
                    const objValues = Object?.values(r["Time Series (Daily)"]) 
                    setValues(Object?.values(objValues))
                    setKeys(Object?.keys(r["Time Series (Daily)"]))
                }
            })
        }
        setShowChart(!showChart)
    }

    function handleShowForm() {
        setShowForm(!showForm)
    }
    

    function renderChart() {
        return (
            <Chart
                symbol={symbol}
                keys={keys} 
                values2={values} />
        )
    }
    // console.log(keys)
    

    useEffect (() => {
        fetch(`https://schwab.p.rapidapi.com/quote/get-summary?symbol=${symbol}`, {
                    method: 'GET',
                    headers: {
                    'X-RapidAPI-Host': 'schwab.p.rapidapi.com',
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
                    }
                })
                    .then(response => response.json())
                    .then(response => {
                        const noDollarSign = response.QuoteOutput.LastPrice?.slice(1)
                        const newPrice = noDollarSign?.replaceAll(',','')
                        const formattedPrice = parseFloat(newPrice)
                        setCurrentPrice(formattedPrice)
                    })
                    .catch(err => console.error(err));
        }, [])

        console.log(currentPrice)
        const performanceOverTime = currentPrice - price 

    return(
        <div>
            <div>Name: {symbol} - {name} </div>
            <div>Initial Purchasing Price: ${price}</div>
            <div>Price Change Since Purchase: $ {performanceOverTime.toFixed(2)}</div>
            <button className="button" onClick={handleDelete}>Delete Stock</button>
            <div></div>
            <button className="button" onClick={handleShowChart} >Show Weekly Prices</button>
            <div></div>
            <button className="button" onClick={handleShowForm}>Update Initial Price</button>

            { showForm ? 
                <form  onSubmit={handleEditFormSubmit}>
                    Update Purchase Price:
                    <input onChange={(e) => setUpdatedPrice(e.target.value)} defaultValue="Price" type="text" />
                    <input className="button" type="submit" value="Update" />
                </form> : null}
                <div></div>
            <p className="error">{updateError ? updateError : null}</p>

            {values.length > 0 && keys.length > 0 && showChart ? renderChart() : null}
            
        </div>
    )
}

export default UserStockCard