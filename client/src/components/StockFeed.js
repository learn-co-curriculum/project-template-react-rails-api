import { useEffect, useState } from "react"
import StockCard from "./StockCard";
import Query from "./Query"

function StockFeed ({currentUser, userStocks, setUserStocks}) {
    const [stocks, setStocks] = useState([])
    const [news, setNews] = useState([])
    
      useEffect (() => {
        fetch('https://schwab.p.rapidapi.com/market/get-top-mentions', {
        method: 'GET', 
        headers: {
          'X-RapidAPI-Host': 'schwab.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }})
          .then(r => r.json())
          .then(r => setStocks(r.TopMentionsApiData))
          .catch(err => console.error(err))
      }, [])

    useEffect (() => {
      fetch('https://schwab.p.rapidapi.com/news/get-market-update', {
        method: 'GET', 
        headers: {
          'X-RapidAPI-Host': 'schwab.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }})
      .then(response => response.json())
      .then(response => setNews(response))
      .catch(err => console.error(err));
    }, [])
     
    console.log(news)

   const singleStock = stocks?.map((stock) => ( 
   <div className="stock-card">
     <StockCard 
      currentUser={currentUser} 
      stock={stock} 
      userStocks={userStocks} 
      setUserStocks={setUserStocks}
     />
    </div>))
      

    return (
        <div className="stock-cards-container">
            <Query 
              currentUser={currentUser}
              userStocks={userStocks}
              setUserStocks={setUserStocks}
            />
            <h1>Featured</h1>
             {singleStock}

              <h1>News</h1>
              <div className="stock-card">
                <strong><div>{news.Headline}</div></strong>
                <div>{news.Timestamp}</div>
                <div>{news.Teaser}</div> 
              </div>
        </div>
    )
}

export default StockFeed