import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import SmallCard from "../styles/Card.style"

const AppointmentList = () => {
	const [appointments, setAppointments] = useState([])
	const [errors, setErrors] = useState([])
	const history = useHistory()

	useEffect(()=> {
		fetch('/appointments')
		.then(res => {
      if(res.ok){
        res.json().then(appts => setAppointments(appts))				
      }else {
        res.json().then(data => { 
					setErrors(data.error)
					history.push('/login')
				})
      }
    })
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
			<SmallCard as = {Link} to= {`/appointments/create`}>
				New Appointment
			</SmallCard>
		</div>
	)
}

export default AppointmentList;