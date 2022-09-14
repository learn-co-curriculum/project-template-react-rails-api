import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LargeCard } from "../styles/Card.style"
import { TIMES } from "./App"

const CreateAppointment = () => {
	const [providers, setProviders] = useState([])
	const [providerName, setProviderName] = useState("")
	const [providerLocation, setProviderLocation] = useState("")
	const [appointmentTime, setAppointmentTime] = useState("")
	const [reason, setReason] = useState("")
	const [appt, setAppt] = useState({
		name: "",
		location: "",
		date: "",
		time: "",
		reason: ""
	})

	const [errors, setErrors] = useState([])
	const history = useHistory()

	useEffect(()=> {
		fetch(`/providers`)
		.then(res => {
      if(res.ok){
        res.json().then(providers => setProviders(providers))				
      }else {
        res.json().then(data => { 
					setErrors(data.error)
					history.push('/login')
				})
      }
    })
	}, [])

	const providersList = providers.map((provider) => {
		return(
			<option value= {provider.id}>{provider.name}</option>
		)
	})

	const timeList = TIMES.map((time) => {
		return(
			<option>{time}</option>
		)
	})

	const handleSubmit = () => {
		console.log("submit")
	}

	const findProvider = (e) => {
		const provider = providers.find((provider) => parseInt(provider.id) === parseInt(e.target.value))
		return provider.location
	}

	// const handleLocation = (e) => {
	// 	return setProviderLocation(() => findProvider(e))
	// }

	const handleApptData = (e) => {
		setProviderLocation(() => findProvider(e))
		const newAppt = { ...appt,
			[e.target.name]: e.target.value
		}
	}
	console.log(appt)
	return(
		<div>
			<LargeCard>
				<form onSubmit={handleSubmit}>
					<label> Provider </label>
					<select name = "name" onChange= {handleApptData}>
						{providersList}
					</select>

					<label> Location </label>
					<h4>{providerLocation}</h4>

					<label>Date</label>
					<select name = "date" ></select>

					<label> Time </label>
					<select name = "time">{timeList}</select>

					<label> Reason </label>
					<textarea name = "reason"/>

					<input type = "submit" />
				</form>
			</LargeCard>
		</div>
	)
}

export default CreateAppointment;