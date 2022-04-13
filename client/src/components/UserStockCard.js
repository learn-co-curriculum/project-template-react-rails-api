import Chart from "./Chart"
import { useEffect, useState } from "react"

function UserStockCard ({stock, handleDeleteStock}) {
    const {name, symbol, price, id} = stock
    // console.log(companies)
    // console.log(user)
    const [showChart, setShowChart] = useState(false)
    const [fetchData, setFetchData] = useState([])
    const [updatedPrice, setUpdatedPrice] = useState("")
    const [singleStock, setSingleStock] = useState(null)

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
            .then(r => console.log(r))
    }

    function handleShowChart () {
        setShowChart(false) //this helps with displaying wrong data i think 
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`, {
        method: 'GET',
        headers: {'User-Agent': 'request'}
      })
        .then(r => r.json())
        .then(r => setFetchData(r["Time Series (Daily)"]))
        
        setShowChart(!showChart)
    }
    
    
        const values = Object?.values(fetchData) 
        const values2 = Object?.values(values)
        const keys = Object?.keys(fetchData)

        function renderChart() {
            return (
                <Chart
                    symbol={symbol}
                    keys={keys} 
                    values2={values2} />
            )
        }

 
    //maybe hide one chart as other is clicked
    return(
        <div>
            <div>Name: {symbol} - {name} </div>
            <div>Initial Purchasing Price: ${price}</div>
            {/* <div>Price Change Since Yesterday: $ {performance_over_time}</div> */}
            <button className="button" onClick={handleDelete}>Delete Stock</button>
            <div></div>
            <button className="button" onClick={handleShowChart} >Show Weekly Prices</button>

            <form  onSubmit={handleEditFormSubmit}>
                Update Purchase Price:
                <input onChange={(e) => setUpdatedPrice(e.target.value)} defaultValue="Price" type="text" />
                <input className="button" type="submit" value="Update" />
            </form>

            {/* one chart rendering throughout maybe move to portfolio*/}
            {values2.length > 0 && showChart ? renderChart() : null}
            
        </div>
    )
}

export default UserStockCard