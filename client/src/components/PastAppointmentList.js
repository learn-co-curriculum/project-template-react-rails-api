import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import React, { useState } from "react";
import AppointmentCard from './AppointmentCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    papergrid: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(48),
          height: theme.spacing(22),
        },
      },
  }));

function PastAppointmentList({ user }) {
    const [pastAppointments, setPastAppointments] = useState([])

    const classes = useStyles();

    useEffect(() => {
        fetch(`/users/${user.id}/past_appointments`).then((r) => {
            if (r.ok) {
                // r.json().then((appointments) => console.log(appointments))
                r.json().then((appointments) => setPastAppointments(appointments))
            }
        })
    }, [])
    
    return (
    <>
    <h1 style={{color: "#0D87E3"}}>These are your past appointments, {user.role.first_name}!</h1>
    <div className="flex-container">
            <div className={classes.root}>
                <div className={classes.papergrid} >

                    {pastAppointments.map(appointment => <AppointmentCard
                        user={user}
                        appointment={appointment}
                        key={appointment.id}
                        time={appointment.time}
                        patient={appointment.patient}
                        doctor={appointment.doctor}
                        // link = {`upcoming-appointments/${appointment.id}/`}
                    />)}

                </div>
            </div>    
        </div>
    </>
    )

}

export default PastAppointmentList;
