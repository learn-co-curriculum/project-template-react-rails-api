import Chart from "./Chart"
import { useEffect, useState } from "react"

function UserStockCard ({stock, handleDeleteStock}) {
    const {name, symbol, price, performance_over_time, sector, id} = stock
    const [showChart, setShowChart] = useState(false)
    const [fetchData, setFetchData] = useState([])

    function handleDelete () {
        fetch(`/user_stocks/${id}`, {
            method: "DELETE"
        })
        .then(r => {
           handleDeleteStock(id)
        })
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
            {/* <div>Sector: {sector}</div> */}
            <button className="button" onClick={handleDelete}>Delete Stock</button>
            <div></div>
            <button className="button" onClick={handleShowChart} >Show Weekly Prices</button>
            {/* one chart rendering throughout - state might fix*/}
            {values2.length > 0 && showChart ? renderChart() : null}
            
        </div>
    )
}

export default UserStockCard