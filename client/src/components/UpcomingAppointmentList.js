import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import React, { useState } from "react";
import AppointmentCard from './AppointmentCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

function UpcomingAppointmentList({ user }) {
    const [pastAppointments, setPastAppointments] = useState([])

    const classes = useStyles();

    useEffect(() => {
        fetch(`/users/${user.id}/upcoming_appointments`).then((r) => {
            if (r.ok) {
                // r.json().then((appointments) => console.log(appointments))
                r.json().then((appointments) => setPastAppointments(appointments))
            }
        })
    }, [])
    
    return (
    <>
    <h1>These are your upcoming appointments, {user.role.first_name}!</h1>
    <div className="flex-container">
            <div className={classes.root}>
                <Grid container spacing={3}>

                    {pastAppointments.map(appointment => <AppointmentCard
                        user={user}
                        appointment={appointment}
                        key={appointment.id}
                        time={appointment.time}
                        patient={appointment.patient}
                        doctor={appointment.doctor}
                    />)}

                </Grid>
            </div>    
        </div>
    </>
    )

}

export default UpcomingAppointmentList;
