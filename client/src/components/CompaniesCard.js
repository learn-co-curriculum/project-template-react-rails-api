import {useEffect, useState} from "react"

function CompaniesCard ({company}) {
    const { name, symbol } = company
    const [quoteNews, setQuoteNews] = useState(null)
    const [showSummary, setShowSummary] = useState(false)
    const [showCompanyNews, setShowCompanyNews] = useState(false)

    useEffect (() => {
        fetch(`https://schwab.p.rapidapi.com/quote/get-summary?symbol=${symbol}`, {
                method: 'GET',
                headers: {
                'X-RapidAPI-Host': 'schwab.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
                }
            })
                .then(response => response.json())
                .then(response => setQuoteNews(response))
                .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <strong>
                <div>{name}</div>
                <div>{symbol}</div>
            </strong>

            <button className="button" onClick={() => setShowSummary(!showSummary)}>{showSummary ? "Hide Business Summary" : "Show Business Summary"}</button>

            {showSummary ? <div>{quoteNews?.CompanyOverviewOutput.BusinessSummary}</div> : null}
            <div></div>

            <button className="button" onClick={() => setShowCompanyNews(!showCompanyNews)}>{ showCompanyNews ? "Hide Company News Summary" : "Show Company News Summary" }</button>
            
            

            {showCompanyNews ? 
                <>
                    <div><strong>{quoteNews?.StocksNewsOutput.Stories[1].Headline}</strong></div>
                    <div>{quoteNews?.StocksNewsOutput.Stories[1].Teaser}</div>
                    <div></div>
                    <div><strong>{quoteNews?.StocksNewsOutput.Stories[0].Headline}</strong></div>
                    <div>{quoteNews?.StocksNewsOutput.Stories[0].Teaser}</div>

                </>
                 : null
            }

        </div>
    )
}

export default CompaniesCard