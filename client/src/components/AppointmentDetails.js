import { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { LargeCard, CardDetails } from "../styles/Card.style"
import { ContentGrid } from "../styles/Grid.style"
import { EditAndCancelButton } from "../styles/Button.style"

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
			<h1>Appointment Details</h1>
				<CardDetails>
					<h2>You have an appointment with {appointment.provider.name}</h2>
					<h2>{appointment.location}</h2>
					<h2>On {`${appointment.day} at ${appointment.time}`}</h2>
					<h2>Reason:  </h2>
					<h3> {appointment.reason}</h3>
					<EditAndCancelButton>
						<Link to = {`/appointments/${params.id}/edit`}>
							Edit Appointment
						</Link>
					</EditAndCancelButton>
					
					<EditAndCancelButton onClick={cancelAppointment}>Cancel Appointment</EditAndCancelButton>
				</CardDetails>
			</LargeCard>
		</ContentGrid>
	)
}

export default AppointmentDetails;