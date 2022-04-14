import { useEffect} from "react"
import UserStockCard from "./UserStockCard"
import { useHistory } from "react-router-dom"


function UserPortfolio ({userStocks, setUserStocks, error, setError}) {
    
   let history = useHistory() 

    useEffect(() => {
        fetch("/current_user")
        .then(r => r.json())
        .then(user => {
            if (!user.error) {
                setUserStocks(user.user_stocks)
            } else {
                history.push("/login")
            }
        })
    }, [])

    
    function handleDeleteStock (id) {
        const updatedStocks = userStocks.filter(stock => stock.id !== id)
        setUserStocks(updatedStocks)
    }

    return (
        <div className="stock-cards-container">
            <h1>My Portfolio</h1>
           
            {userStocks?.map((stock) => (
                <div className="stock-card">
                    <UserStockCard 
                        stock={stock} 
                        handleDeleteStock={handleDeleteStock}
                        error={error} 
                        setError={setError}
                        setUserStocks={setUserStocks}
                        userStocks={userStocks}
                    /> 
                </div>)
            )}
        </div>
    )
}

export default UserPortfolio