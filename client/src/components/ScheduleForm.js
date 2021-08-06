import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import Button from "../styles/Button";
import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Textarea from "../styles/Textarea";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function ScheduleForm({ user }) {
    const classes = useStyles();
    const [doctorId, setDoctorId] = useState("")
    const [doctorArray, setDoctorArray] = useState([])
    const [time, setTime] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    
    useEffect(() => {
        fetch("/doctors").then((r) => {
            if (r.ok) {
                r.json().then((doctorArray) => setDoctorArray(doctorArray))
            }
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        async function appointmentCreate() {
            const res = await fetch("/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    patient_id: user.role.id,
                    doctor_id: doctorId,
                    time: time,
                    patient_intake_complete: false,
                    appointment_complete: false
                })
            });

            if(res.ok) {
                const appointment = await res.json()
                console.log(appointment)
                console.log("Appointment created successfully!")
                history.push("/intakes")
            }
        }
        appointmentCreate()
    }

    return (
        <>
        <h1 style={{color: "#0D87E3"}}>Schedule an appointment, {user.role.first_name}!</h1>
        <form onSubmit={handleSubmit}>

        
        <FormControl className={classes.formControl}>
            <InputLabel>Select...</InputLabel>
            <Select value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
            {doctorArray.map(doctor => 
                <MenuItem value={doctor.id}>Dr {doctor.last_name}</MenuItem>
                )}
            </Select>
        </FormControl>

        



        <FormField>
            <Label htmlFor="time">Enter a time</Label>
            <Input
            type="text"
            id="time"
            autoComplete="off"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            />
        </FormField>
        <FormField>
            <Button color="secondary" type="submit">{isLoading ? "Loading..." : "Book Appointment"}</Button>
        </FormField>
        </form>

        </>
    )

}

export default ScheduleForm;
