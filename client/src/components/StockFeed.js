import { useEffect, useState } from "react"
import StockCard from "./StockCard";

function StockFeed () {
    const [stocks, setStocks] = useState([])
    const [news, setNews] = useState([])

    // const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Host': 'schwab.p.rapidapi.com',
    //       'X-RapidAPI-Key': 'e3f8b2c697msh1303e53d55e4b4fp11ec0djsn1bb893a2d6e2'
    //     }
    //   };
    
      useEffect (() => {
        fetch('https://schwab.p.rapidapi.com/market/get-top-mentions', {
        method: 'GET', 
        headers: {
          'X-RapidAPI-Host': 'schwab.p.rapidapi.com',
          'X-RapidAPI-Key': 'e3f8b2c697msh1303e53d55e4b4fp11ec0djsn1bb893a2d6e2'
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
          'X-RapidAPI-Key': 'e3f8b2c697msh1303e53d55e4b4fp11ec0djsn1bb893a2d6e2'
        }})
      .then(response => response.json())
      .then(response => setNews(response))
      .catch(err => console.error(err));
    }, [])
     
    console.log(news)

   const singleStock = stocks?.map((stock) => <div className="stock-card"><StockCard stock={stock}/></div>)
      

    return (
        <div className="stock-cards-container">
            <h1>Featured</h1>
             {singleStock}

             <h1>News</h1>
                <div>{news.Headline}</div>
                <div>{news.Timestamp}</div>
                <div>{news.Teaser}</div>
        </div>
    )
}

export default StockFeed