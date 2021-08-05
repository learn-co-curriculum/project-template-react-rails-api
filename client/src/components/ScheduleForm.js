import React, { useState, useEffect } from "react";
import Button from "../styles/Button";
import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Textarea from "../styles/Textarea";

function ScheduleForm({ user }) {
    const [doctorId, setDoctorId] = useState("")
    const [doctorArray, setDoctorArray] = useState([])
    const [time, setTime] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    
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
            }
        }
        appointmentCreate()
    }

    function handleDoctorName(e) {
        setDoctorId(e.target.value)
        console.log(e.target.value)
        // setDoctorObj
    }

    return (
        <>
        <h1>Schedule an appointment, {user.role.first_name}!</h1>
        <form onSubmit={handleSubmit}>
        <FormField>
        <Label htmlFor="roleName">Select Your Doctor 
            <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)}> 
            <option>Select...</option>
            {doctorArray.map(doctor => 
                <option value = {doctor.id}>Dr. {doctor.last_name}</option>
                )}
            </select> 
        </Label>
        </FormField>

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
            <Button type="submit">{isLoading ? "Loading..." : "Book Appointment"}</Button>
        </FormField>
        </form>

        </>
    )

}

export default ScheduleForm;
