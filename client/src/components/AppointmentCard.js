import React from "react";

//import css from material ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

function AppointmentCard({ user, time, patient, doctor, appointment }) {
    
    return (
        <Paper>
            <h1>Date: {time}</h1>
            <h2>Patient: {patient.first_name} {patient.last_name}</h2>
            <h2>Doctor: {doctor.first_name} {doctor.last_name}</h2>
            <h4>Reason for visit: {appointment.intake.reason_for_visit}</h4>
            {appointment.appointment_complete ? null : (
            <>
            <Button variant="contained" color="primary">Complete intake form</Button>
            <Button variant="contained" color="secondary">Cancel Appointment</Button>
            </>
            )}
        </Paper>
    )
}

export default AppointmentCard;
