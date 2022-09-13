import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import SmallCard from "../styles/Card.style"

const AppointmentList = () => {
	const [appointments, setAppointments] = useState([])

	useEffect(()=> {
		fetch('/appointments')
		.then(res => res.json())
		.then(data => setAppointments(data))
	}, [])

	console.log(appointments)
	const renderAppointments = appointments.map((appt) => {
		return(
			<SmallCard as = {Link} key= {appt.id} to= {`/appointments/${appt.id}`}>
				{appt.time}
			</SmallCard>
		)
	})

	return(
		<div>
			{renderAppointments}
			<SmallCard>
				New Appointment
			</SmallCard>
		</div>
	)
}

export default AppointmentList;