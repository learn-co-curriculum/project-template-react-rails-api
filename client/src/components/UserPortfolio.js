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

    // const handleSendMePerformance() {

    //     emailjs.sendForm(`gmail`, apiKey.REACT_APP_TEMPLATE_ID, stateVariable, apiKey.REACT_APP_USER_ID)
    //         .then((result) => {
    //             alert("Message Sent, We will get back to you shortly", result.text)
    //     },
    //         (error) => {
    //             alert("An error occurred, Please try again", error.text);
    //         })

    // }

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