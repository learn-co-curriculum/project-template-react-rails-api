import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import React, { useState } from "react";
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    papergrid: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(40),
          height: theme.spacing(28),
        },
      },
  }));

function DoctorList({ user }) {
    const [doctors, setDoctors] = useState([])

    const classes = useStyles();
    const xsNum = 6;
    const smNum = 2;

    useEffect(() => {
        fetch(`/users/${user.id}/doctors`).then((r) => {
            if (r.ok) {
                // r.json().then((patients) => console.log(patients))
                r.json().then((doctors) => setDoctors(doctors))
            }
        })
    }, [])
    
    return (
        <>
        <h1 style={{color: "#0D87E3"}}>This is your doctor list, {user.role.first_name}!</h1>
        <div className="flex-container">
            <div className={classes.root}>
            <div className={classes.papergrid} >

                    {doctors.map(doctor => <ProfileCard
                        user={user}
                        key={doctor.user.id}
                        firstName={doctor.first_name}
                        lastName={doctor.last_name}
                        phoneNumber={doctor.phone_number}
                        city={doctor.city}
                        specialty={doctor.specialty}
                    />)}

                </div>
            </div>    
        </div>
        </>
    )

}

export default DoctorList;