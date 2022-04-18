import { useEffect, useState } from "react"
import UserStockCard from "./UserStockCard"
import { useHistory } from "react-router-dom"
import emailjs from '@emailjs/browser';



function UserPortfolio ({userStocks, setUserStocks, error, setError}) {
    const [currentUser, setCurrentUser] = useState({})
    
   let history = useHistory() 

    useEffect(() => {
        fetch("/current_user")
        .then(r => r.json())
        .then(user => {
            if (!user.error) {
                setUserStocks(user.user_stocks)
                setCurrentUser(user)
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
                        currentUser={currentUser}
                    /> 
                </div>)
            )}
        </div>
    )
}

export default UserPortfolio