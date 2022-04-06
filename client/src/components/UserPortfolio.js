import { useEffect, useState } from "react"
import UserStockCard from "./UserStockCard"

function UserPortfolio () {
    const [userStocks, setUserStocks] = useState([])

    useEffect(() => {
        fetch("/current_user")
        .then(r => r.json())
        .then(user => setUserStocks(user.user_stocks))
    }, [])

    console.log(userStocks)

    return (
        <div className="stock-cards-container">
            <h1>My Portfolio</h1>
            {userStocks?.map((stock) => <div className="stock-card"><UserStockCard stock={stock} /> </div>)}
        </div>
    )
}

export default UserPortfolio