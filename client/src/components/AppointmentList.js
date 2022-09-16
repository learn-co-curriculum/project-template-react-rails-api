import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import SmallCard from "../styles/Card.style"
import { WiSunrise, WiDaySunny, WiMoonWaningCrescent3 } from 'react-icons/wi'
import { ContentGrid } from "../styles/Grid.style"

const AppointmentList = ({setAppointments, appointments, currentUser}) => {
	
	const [errors, setErrors] = useState([])
	const history = useHistory()

	let currentHours = new Date().getHours()
	const firstName = currentUser ? currentUser.full_name.split(' ')[0] : null
  const generateGreeting = () => {
    if (currentHours >= 5 && currentHours < 12) {
      return <h1><WiSunrise/> Good morning, {firstName}</h1>
    } else if (currentHours >= 12 && currentHours < 18) {
      return <h1><WiDaySunny/> Good afternoon, {firstName}</h1>
    } else {return <h1><WiMoonWaningCrescent3/> Good evening, {firstName}</h1>}
  }

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

	const renderAppointments = appointments.map((appt) => {
		return(
			<SmallCard as= {Link} key= {appt.id} to= {`/appointments/${appt.id}`}>
				<h3>Provider:</h3>
				<p>{appt.provider.name}</p>
				<h3>Appointment Time:</h3>
				<p>{`${appt.day} at `} {`${appt.time}`}</p>
			</SmallCard>
		)
	})

	

	return(
		<ContentGrid>
			{generateGreeting()}
			{renderAppointments}
			<SmallCard as ={Link} to= {`/appointments/create`}>
					Add New Appointment
			</SmallCard>
		</ContentGrid>
	)
}

export default AppointmentList;