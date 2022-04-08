import { useEffect, useState } from "react"
import UserStockCard from "./UserStockCard"

function UserPortfolio ({userStocks, setUserStocks}) {
    // const [userStocks, setUserStocks] = useState([])

    useEffect(() => {
        fetch("/current_user")
        .then(r => r.json())
        .then(user => setUserStocks(user.user_stocks))
    }, [])

    // console.log(userStocks)

    function handleDeleteStock (id) {
        const updatedItems = userStocks.filter(item => item.id !== id)
        setUserStocks(updatedItems)
    }

    return (
        <div className="stock-cards-container">
            <h1>My Portfolio</h1>
            {userStocks?.map((stock) => <div className="stock-card"><UserStockCard stock={stock} handleDeleteStock={handleDeleteStock} /> </div>)}
        </div>
    )
}

export default UserPortfolio