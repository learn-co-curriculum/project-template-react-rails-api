import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import SmallCard from "../styles/Card.style"
import { ContentGrid } from "../styles/Grid.style"

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
				<h3>Provider:</h3> 
				<p>{provider.name}</p>
				
				<h3>Location:</h3> 
				<p>{provider.location}</p>
				
				<h3>Specialty:</h3>
				<p>{provider.specialty}</p>				
			</SmallCard>
		)
	})

	return(
		<ContentGrid>
		<h1>All Providers</h1>
			{renderProviders}
			<SmallCard>
				<Link to= {`/providers/create`}>
					<h3>Add New Provider</h3>
				</Link>
			</SmallCard>
		</ContentGrid>
	)
}

export default ProviderList;