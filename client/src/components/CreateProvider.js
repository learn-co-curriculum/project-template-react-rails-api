import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LargeCard } from "../styles/Card.style"
import { ContentGrid } from "../styles/Grid.style"
import { Select, Label, Input } from "../styles/Form.style"
import Button from "../styles/Button.style"

const CreateProvider = () => {
const [providers, setProviders] = useState([])
const [locations, setLocations] = useState([])
const [errors, setErrors] = useState([])
const [providerData, setProviderData] = useState({
	name: "",
	specialty: "",
	location: ""
})

const history = useHistory()
const specialties = ['Cardiology', 'Gastroenterology', 'Endocrinology', 'General Practice', 'Oncology','Gynaecology', 'Pediatrics', 'Neurology']

useEffect(()=> {
		fetch(`/providers`)
		.then(res => {
      if(res.ok){
        res.json().then(data => {
					setProviders(data[0])
					setLocations(data[1])
				})				
      }else {
        res.json().then(data => { 
					setErrors(data.error)
					history.push('/login')
				})
      }
    })
	}, [])

const handleSubmit = (e) => {
		e.preventDefault()


		fetch('/providers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(providerData)
		})
			.then(r => r.json())
			.then(history.push('/providers'))
	}

	const specialtiesList = specialties.map((specialty) => {
		return(
			<option key={specialty}>{specialty}</option>
		)
	})

	const locationsList = locations.map(location => {
		return(
			<option key={location}>{location}</option>
		)
	})

	const handleChange = (e) => {
		setProviderData({...providerData, [e.target.name]: e.target.value})
	}

	return(
		<ContentGrid>
			<LargeCard>
				<form onSubmit={handleSubmit}>

					<Label> Name </Label>
					<Input name = "name" placeholder="provider name" onChange={handleChange}/>

					<Label> Speciality </Label>
					<Select name = "specialty" onChange={handleChange}>
						<option selected disabled>Choose Specialty:</option>
						{specialtiesList}
					</Select>

					<Label> Location </Label>
					<Select name = "location" onChange= {handleChange}>
						<option selected disabled>Choose Location:</option>
						{locationsList}
					</Select>

					<Button type="submit">Submit</Button>

				</form>
			</LargeCard>
		</ContentGrid>
	)
}

export default CreateProvider;