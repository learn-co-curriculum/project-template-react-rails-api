import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { LargeCard } from "../styles/Card.style"
import { TIMES, DAYS } from "./App"

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
		<div>
			<LargeCard>
				<form onSubmit={handleSubmit}>

					<label>Provider</label>
					<h3>{appointment.provider.name}</h3>

					<label>Appointment Location</label>
					<h3>{appointment.location}</h3>

					<label>Day</label>
					<select name = "day" onChange= {handleDay}>
					<option selected disabled>{appointment.day}</option>
						{daysList}
					</select>

					<label> Time </label>
					<select name = "time" onChange= {handleTime}>
					<option selected disabled>{appointment.time}</option>
						{timeList}
					</select>

					<label> Reason </label>
					<textarea name = "reason" placeholder={appointment.reason} onChange= {handleReason}/>

					<input type = "submit" />
				</form>
			</LargeCard>
		</div>
	)
}

export default EditAppointment;