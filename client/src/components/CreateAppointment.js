import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { TIMES, DAYS } from "./App"
import { LargeCard } from "../styles/Card.style"
import { ContentGrid } from "../styles/Grid.style"
import { Select, Label, TextArea, Form } from "../styles/Form.style"
import Button from "../styles/Button.style"

const CreateAppointment = ({addNewAppointment}) => {
	const [providers, setProviders] = useState([])
	const [locations, setLocations] = useState([])
	const [userId, setUserId] = useState(0)
	const [providerId, setProviderId] = useState("")
	const [formLocation, setFormLocation] = useState("")
	const [appointmentDay, setAppointmentDay] = useState("")
	const [appointmentTime, setAppointmentTime] = useState("")
	const [reason, setReason] = useState("")

	const [errors, setErrors] = useState([])
	const history = useHistory()

	useEffect(()=> {
		fetch(`/providers`)
		.then(res => {
      if(res.ok){
        res.json().then(data => {
					setProviders(data[0])
					setLocations(data[1])
					setUserId(data[2])
				})				
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
			<option value={provider.id}>{provider.name}</option>
		)
	})

	const locationsList = locations.map(location => {
		return(
			<option>{location}</option>
		)
	})

	const timeList = TIMES.map((time) => {
		return(
			<option>{time}</option>
		)
	})

	const daysList = DAYS.map(day => {
		return(
			<option>{day}</option>
		)
	})

	const handleProviderId = (e) => {
		setProviderId(parseInt(e.target.value))
	}

	const handleLocation = (e) => {
		setFormLocation(e.target.value)
	}

	const handleDay = (e) => {
		setAppointmentDay(e.target.value)
	}

	const handleTime = (e) => {
		console.log(e.target.value)
		setAppointmentTime(e.target.value)
	}

	const handleReason = (e) => {
		setReason(e.target.value)
	}	

	const handleSubmit = (e) => {
		e.preventDefault()
		const newAppt = {
			provider_id: providerId,
			location: formLocation,
			day: appointmentDay,
			time: appointmentTime,
			reason: reason,
			user_id: userId
		}

		console.log(newAppt)

		fetch('/appointments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newAppt)
		})
			.then(r => r.json())
			.then(newAppt => { 
				addNewAppointment(newAppt)
				history.push('/appointments')
			})
	}

	return(
		<ContentGrid>
			<LargeCard>
				<h2> Make An Appointment </h2>
				<Form onSubmit={handleSubmit}>
					<Label> Provider </Label>
					<Select name = "id" onChange= {handleProviderId}>
					<option selected disabled>Choose Provider:</option>
						{providersList}
					</Select>

					<Label> Location </Label>
					<Select name = "location" onChange= {handleLocation}>
						<option selected disabled>Choose Location:</option>
						{locationsList}
					</Select>

					<Label>Day</Label>
					<Select name = "day" onChange= {handleDay}>
					<option selected disabled>Choose Day of the Week:</option>
						{daysList}
					</Select>

					<Label> Time </Label>
					<Select name = "time" onChange= {handleTime}>
					<option selected disabled>Choose Appointment Time:</option>
						{timeList}
					</Select>

					<Label> Reason </Label>
					<TextArea name = "reason" placeholder="Reason for visit..." onChange= {handleReason}/>

					<Button type = "submit" >Submit</Button>
				</Form>
			</LargeCard>
		</ContentGrid>
	)
}

export default CreateAppointment;