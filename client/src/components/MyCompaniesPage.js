import { useEffect, useState } from "react"
import CompaniesCard from "./CompaniesCard"
 
function MyCompaniesPage () {
    const [userCompanies, setUserCompanies] = useState([])

    useEffect(() => {
        fetch("/current_user")
        .then(r => r.json())
        .then(user => setUserCompanies(user.companies))
    }, [])

    console.log(userCompanies)

    const singleCompany = userCompanies.map((company) => <CompaniesCard company={company}/>)

    return (

        <div>
             {singleCompany}
        </div>

    )
}

export default MyCompaniesPage