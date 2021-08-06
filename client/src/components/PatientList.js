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
          height: theme.spacing(24),
        },
      },
  }));

function PatientList({ user }) {
    const [patients, setPatients] = useState([])

    const classes = useStyles();
    const xsNum = 6;
    const smNum = 2;

    useEffect(() => {
        fetch(`/users/${user.id}/patients`).then((r) => {
            if (r.ok) {
                // r.json().then((patients) => console.log(patients))
                r.json().then((patients) => setPatients(patients))
            }
        })
    }, [])
    
    return (
        <>
        <h1 style={{color: "#0D87E3"}}>This is your patient list, {user.role.first_name}!</h1>
        <div className="flex-container">
            <div className={classes.root}>
                <div className={classes.papergrid} >

                    {patients.map(patient => <ProfileCard
                        user={user}
                        key={patient.user.id}
                        firstName={patient.first_name}
                        lastName={patient.last_name}
                        phoneNumber={patient.phone_number}
                        dateOfBirth={patient.date_of_birth}
                    />)}

                </div>
            </div>    
        </div>
        </>
    )

}

export default PatientList;

{/* <Grid container spacing={3}>
{heroArray.map(hero => <HeroCard 
                                  key={hero.id} 
                                  hero={hero} 
                                  heroId={hero.id}
                                  onHeroSelection={onHeroSelection}
                                  xsNum={xsNum}
                                  smNum={smNum}
                                  disselectBtnId={disselectBtnId}
                                  heroImage={hero.thumbnail.path + "." + hero.thumbnail.extension}
                                  link={`/recruit/${hero.id}`}
                                  />)}
</Grid> */}