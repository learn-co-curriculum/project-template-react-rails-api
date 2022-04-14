import { useEffect, useState } from "react"
import CompaniesCard from "./CompaniesCard"
import { useHistory } from "react-router-dom"
 
function MyCompaniesPage () {
    const [userCompanies, setUserCompanies] = useState([])

    let history= useHistory() 

    useEffect(() => {
        fetch("/current_user")
        .then(r => r.json())
        .then(user => {
            if (!user.error) {
                setUserCompanies(user.companies)
            } else {
                history.push("/login")
            }
        })
    }, [])

    console.log(userCompanies)

    
    
    //remove duplicates ??

    const singleCompany = userCompanies?.map((company) => <div className="stock-card"><CompaniesCard company={company}/></div>)

    return (

        <div className="stock-cards-container">
             {singleCompany}
        </div>

    )
}

export default MyCompaniesPage