import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

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
			<Link key= {appt.id} to= {`/appointments/${appt.id}`}/>
		)
	})

	return(
		<div>
			{renderAppointments}
			<div>
				New Appointment
			</div>
		</div>
	)
}

export default AppointmentList;