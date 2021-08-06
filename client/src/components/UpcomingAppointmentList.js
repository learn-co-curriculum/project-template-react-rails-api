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
    const [upcomingAppointments, setUpcomingAppointments] = useState([])

    const classes = useStyles();

    useEffect(() => {
        fetch(`/users/${user.id}/upcoming_appointments`).then((r) => {
            if (r.ok) {
                r.json().then((appointments) => setUpcomingAppointments(appointments))
            }
        })
    }, [])
    
    return (
    <>
    <h1 style={{color: "#0D87E3"}}>These are your upcoming appointments, {user.role.first_name}!</h1>
    <div className="flex-container">
            <div className={classes.root}>
                <Grid container spacing={3}>

                    {upcomingAppointments.map(appointment => <AppointmentCard
                        upcomingAppointments={upcomingAppointments}
                        setUpcomingAppointments={setUpcomingAppointments}
                        user={user}
                        appointment={appointment}
                        key={appointment.id}
                        time={appointment.time}
                        patient={appointment.patient}
                        doctor={appointment.doctor}
                        link = {`intakes/${appointment.intake.id}/`}
                    />)}

                </Grid>
            </div>    
        </div>
    </>
    )

}

export default UpcomingAppointmentList;
