import { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { LargeCard } from "../styles/Card.style"
import { ContentGrid } from "../styles/Grid.style"
import Button from "../styles/Button.style"

const AppointmentDetails = ({deleteAppointment}) => {
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

	const cancelAppointment = () => {
		fetch(`/appointments/${params.id}`, {
			method: "DELETE",
		})
		.then(() =>{
			deleteAppointment(params.id)
			history.push('/appointments')
		})
	}

	return(
		<ContentGrid>
			<LargeCard>
				<h2>Appointment Details</h2>
				<h4>Provider: </h4>
				<p>{appointment.provider.name}</p>
				<h4>Day: </h4>
				<p>{appointment.day}</p>
				<h4>Time:</h4>
				<p>{appointment.time}</p> 
				<h4>Location:</h4> 
				<p>{appointment.location}</p>
				<h4>Reason: </h4>
				<p>{appointment.reason}</p>
				<Button  as = {Link} to = {`/appointments/${params.id}/edit`}>Edit Appointment</Button>
				<Button onClick={cancelAppointment}>Cancel Appointment</Button>
			</LargeCard>
		</ContentGrid>
	)
}

export default AppointmentDetails;