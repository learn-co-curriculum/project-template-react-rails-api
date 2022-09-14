import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { LargeCard } from "../styles/Card.style"

const AppointmentDetails = () => {
	const params = useParams()
	const [appointment, setAppointment] = useState([])
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
		
	return(
		<div>
			<LargeCard>
				{appointment.time}
			</LargeCard>
		</div>
	)
}

export default AppointmentDetails;