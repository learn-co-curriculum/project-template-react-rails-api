import { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { LargeCard } from "../styles/Card.style"
import Button from "../styles/Button.style"

const AppointmentDetails = () => {
	const params = useParams()
	const [appointment, setAppointment] = useState({provider: {name: ""}})
	const [errors, setErrors] = useState([])
	const history = useHistory()

	useEffect(()=> {
		fetch(`/appointments/${params.id}`)
		.then(res => {
      if(res.ok){
        res.json().then(appt => setAppointment(appt))				
      }else {
        res.json().then(data => { 
					setErrors(data.error)
					history.push('/login')
				})
      }
    })
	}, [])

	console.log(appointment.provider)

	return(
		<div>
			<LargeCard>
				Provider : {appointment.provider.name}
				Day: {appointment.day}
				Time: {appointment.time}
				Location: {appointment.location}
				Reason: {appointment.reason}
				<Button  as = {Link} to = {`/appointments/${params.id}/edit`}>Edit Appointment</Button>
				<Button>Cancel Appointment</Button>
			</LargeCard>
		</div>
	)
}

export default AppointmentDetails;