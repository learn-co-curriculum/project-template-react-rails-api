import React from "react";

//import css from material ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function ProfileCard( {user, firstName, lastName, phoneNumber, dateOfBirth, specialty, city} ) {
    
    if (user.role_type === "Doctor") {
        return (
            <Paper>
                <h1>{firstName} {lastName}</h1>
                <h2>Phone: {phoneNumber}</h2>
                <h3>Date of Birth: {dateOfBirth}</h3>
            </Paper>
    )} else if (user.role_type === "Patient") {
        return (
            <Paper>
                <h1>{firstName} {lastName}</h1>
                <h2>Phone: {phoneNumber}</h2>
                <h3>Specialty: {specialty}</h3>
                <h4>City: {city}</h4>
            </Paper>
        )
    }

}

export default ProfileCard

