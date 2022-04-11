import Chart from "./Chart"
import { useEffect, useState } from "react"

function UserStockCard ({stock, handleDeleteStock, fetchData, setFetchData}) {
    const {name, symbol, price, performance_over_time, sector, id} = stock
    // const [fetchData, setFetchData ] = useState({})
    const [showChart, setShowChart] = useState(false)
    const [data, setData] = useState([])

    
    function handleDelete () {
        fetch(`/user_stocks/${id}`, {
            method: "DELETE"
        })
        .then(r => {
           handleDeleteStock(id)
        })
    }

    function handleShowChart () {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`, {
        method: 'GET',
        headers: {'User-Agent': 'request'}
      })
        .then(r => r.json())
        .then(r => setFetchData(r["Time Series (Daily)"]))
        

        setShowChart(!showChart)
        
        // const values = Object?.values(fetchData) 
        // const keys = Object?.keys(fetchData)
        // const values2 = Object?.values(values)
        
            // setData([
            //     {
            //         date: keys[6],
            //         close: values2[6]["4. close"],
            //     },
            //     {
            //         date: keys[5],
            //         close: values2[5]["4. close"],
            //     },
            //     {
            //         date: keys[4],
            //         close: values2[4]["4. close"],
            //     },
            //     {
            //         date: keys[3],
            //         close: values2[3]["4. close"],
            //     },
            //     {
            //         date: keys[2],
            //         close: values2[2]["4. close"],
            //     },
            //     {
            //         date: keys[1],
            //         close: values2[1]["4. close"],
            //     },
            //     {
            //         date: keys[0],
            //         close: values2[0]["4. close"],
            //     }
            // ]) 
    }


    const values = Object?.values(fetchData) 
    const keys = Object?.keys(fetchData)
    const values2 = Object?.values(values)
       

    return(
        <div>
            <div>Name: {symbol} - {name} </div>
            <div>Initial Purchasing Price: ${price}</div>
            {/* <div>Price Change Since Yesterday: $ {performance_over_time}</div> */}
            {/* <div>Sector: {sector}</div> */}
            <button className="button" onClick={handleDelete}>Delete Stock</button>
            <div></div>
            <button className="button" onClick={handleShowChart}>Show Weekly Prices</button>
            {/* one chart rendering throughout - state might fix*/}
            {fetchData && showChart ? <Chart  symbol={symbol} data={data} keys={keys} values2={values2}/> : null}
            
        </div>
    )
}

export default UserStockCard