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
				<h4>Provider: {provider.name}</h4>
				<h4>Location: {provider.location}</h4>
				<h4>Specialty: {provider.specialty}</h4>
			</SmallCard>
		)
	})

	return(
		<ContentGrid>
			{renderProviders}
			<SmallCard as = {Link} to= {`/providers/create`}>
				Add New Provider
			</SmallCard>
		</ContentGrid>
	)
}

export default ProviderList;