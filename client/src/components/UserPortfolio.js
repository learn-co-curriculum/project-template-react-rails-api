import { useEffect, useState } from "react"
import UserStockCard from "./UserStockCard"


function UserPortfolio ({userStocks, setUserStocks}) {
    const [fetchData, setFetchData ] = useState({})
    

    useEffect(() => {
        fetch("/current_user")
        .then(r => r.json())
        .then(user => setUserStocks(user.user_stocks))
    }, [])

    
    function handleDeleteStock (id) {
        const updatedItems = userStocks.filter(item => item.id !== id)
        setUserStocks(updatedItems)
    }

    return (
        <div className="stock-cards-container">
            <h1>My Portfolio</h1>
           
            {userStocks?.map((stock) => (
                <div className="stock-card">
                    <UserStockCard 
                    stock={stock} 
                    handleDeleteStock={handleDeleteStock}
                    setFetchData={setFetchData}
                    fetchData={fetchData}
                    /> 
                </div>)
            )}
        </div>
    )
}

export default UserPortfolio