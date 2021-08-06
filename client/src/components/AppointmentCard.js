import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import css from material ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

function AppointmentCard({ user, time, patient, doctor, appointment, link, setUpcomingAppointments, upcomingAppointments }) {

    function handleDestroy() {
        
        async function deleteIntake() {
            const res = await fetch(`/appointments/${appointment.id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                // console.log("Successfully deleted!")
                // setUpcomingAppointments(upcomingAppointments)
                fetch(`/users/${user.id}/upcoming_appointments`).then((r) => {
                    if (r.ok) {
                        r.json().then((appointments) => setUpcomingAppointments(appointments))
                    }
                })
            }
        }

        deleteIntake();
    }

    return (
        <Paper>
            <h1>Date: {time}</h1>
            {user.role_type === "Doctor" ? (
                <>
                <h2>Patient: {patient.first_name} {patient.last_name}</h2>
                </>
                ) : (
                <>
                <h2>Doctor: {doctor.first_name} {doctor.last_name}</h2>
                </>    
                ) 
            }
            {/* <h2>Patient: {patient.first_name} {patient.last_name}</h2>
            <h2>Doctor: {doctor.first_name} {doctor.last_name}</h2> */}
            <h4>Reason for visit: {appointment.intake.reason_for_visit}</h4>
            
            {appointment.appointment_complete ? null : (
            <>
            {/* <Button variant="contained" color="primary" onclick="/upcoming-appointments/intake/edit">Complete intake form</Button> */}
            <Link to={link}>Complete intake form</Link>
            <Button onClick={handleDestroy} variant="contained" color="secondary">Cancel Appointment</Button>
            </>
            )}
        </Paper>
    )
}

export default AppointmentCard;
