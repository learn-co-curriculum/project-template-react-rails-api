import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TIMES, DAYS } from "./App"
import { LargeCard } from "../styles/Card.style"
import { ContentGrid } from "../styles/Grid.style"
import { Select, Label, TextArea, Form } from "../styles/Form.style"
import Button from "../styles/Button.style"


const EditAppointment = ({updateAppointment}) => {
	const [appointment, setAppointment] = useState({provider: {name: ""}})
	const [appointmentDay, setAppointmentDay] = useState("")
	const [appointmentTime, setAppointmentTime] = useState("")
	const [reason, setReason] = useState("")

	const [errors, setErrors] = useState([])
	const history = useHistory()
	const params = useParams()

	useEffect(()=> {
		fetch(`/appointments/${params.id}`)
		.then(res => {
      if(res.ok){
        res.json().then(data => {
					setAppointment(data)
				})				
      }else {
        res.json().then(data => { 
					setErrors(data.error)
					history.push('/login')
				})
      }
    })
	}, [])

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
		const updatedAppt = {
			provider_id: appointment.provider.id,
			location: appointment.location,
			day: appointmentDay,
			time: appointmentTime,
			reason: reason,
			user_id: appointment.user.id
		}

		console.log(updatedAppt)

		fetch(`/appointments/${params.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updatedAppt)
		})		
			.then(r => r.json())
			.then(updatedAppt => { 
				updateAppointment(updatedAppt)
				history.push(`/appointments/${params.id}`)
			})

			
	}

	return(
		<ContentGrid>
			<LargeCard>
			<h2>Edit Your Appointment with</h2>
			{errors ? errors.map(e => <section>{e}</section>):null}
				<Form onSubmit={handleSubmit}>

					<h3>{appointment.provider.name}</h3>
					<h3>{appointment.location}</h3>

					<Label>Change Day</Label>
					<Select name = "day" onChange= {handleDay}>
					<option selected disabled>{appointment.day}</option>
						{daysList}
					</Select>

					<Label> Change Time </Label>
					<Select name = "time" onChange= {handleTime}>
					<option selected disabled>{appointment.time}</option>
						{timeList}
					</Select>

					<Label> Change Reason For Visit </Label>
					<TextArea name = "reason" placeholder={appointment.reason} onChange= {handleReason}/>

					<Button type = "submit">Submit</Button>
				</Form>
			</LargeCard>
		</ContentGrid>
	)
}

export default EditAppointment;