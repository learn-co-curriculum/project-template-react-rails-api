import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import SmallCard from "../styles/Card.style"

const ProviderList = ( ) => {
	const [providers, setProviders] = useState([])
	const [errors, setErrors] = useState([])
	const history = useHistory()

	useEffect(()=> {
		fetch('/providers')
		.then(res => {
      if(res.ok){
        res.json().then(data => setProviders(data[0]))				
      }else {
        res.json().then(data => { 
					setErrors(data.error)
					history.push('/login')
				})
      }
    })
	}, [])

	const renderProviders = providers.map((provider) => {
		return(
			<SmallCard key= {provider.id}>
				<h2>{provider.name}</h2>
				<h2>{provider.location}</h2>
				<h2>{provider.specialty}</h2>
			</SmallCard>
		)
	})

	return(
		<div>
			{renderProviders}
			<SmallCard as = {Link} to= {`/providers/create`}>
				New Provider
			</SmallCard>
		</div>
	)
}

export default ProviderList;