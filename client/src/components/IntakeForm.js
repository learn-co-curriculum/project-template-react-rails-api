import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from 'react-router-dom'
import Button from "../styles/Button";
import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Textarea from "../styles/Textarea";

function IntakeForm({ user }) {
    const [appointment, setAppointment] = useState([])
    const [reasonForVisit, setReasonForVisit] = useState("")
    const [onset, setOnset] = useState("")
    const [location, setLocation] = useState("")
    const [duration, setDuration] = useState("")
    const [characteristics, setCharacteristics] = useState("")
    const [aggravatingFactors, setAggravatingFactors] = useState("")
    const [relievingFactors, setRelievingFactors] = useState("")
    const [timingAndSeverity, setTimingAndSeverity] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams()

    const history = useHistory();

    function setStates(appointment) {
        setAppointment(appointment)
        setReasonForVisit(appointment.intake.reason_for_visit)
        setOnset(appointment.intake.onset)
        setLocation(appointment.intake.location)
        setDuration(appointment.intake.duration)
        setCharacteristics(appointment.intake.characteristics)
        setAggravatingFactors(appointment.intake.aggravating_factors)
        setRelievingFactors(appointment.intake.relieving_factors)
        setTimingAndSeverity(appointment.intake.timing_and_severity)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        async function intakeSave() {
            const res = await fetch(`/intakes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    reason_for_visit: reasonForVisit,
                    onset: onset,
                    location: location,
                    duration: duration,
                    characteristics: characteristics,
                    aggravating_factors: aggravatingFactors,
                    relieving_factors: relievingFactors,
                    timing_and_severity: timingAndSeverity
                })
            })

            if(res.ok){
                const intake = await res.json()
                console.log("Intake updated successfully!")
                console.log (intake)
                history.push("/intakes")
            }
        }

        intakeSave();
    }

    useEffect(() => {
        fetch(`/appointments/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((appointment) => setStates(appointment))
            }
        })
    }, [])
    
    return (
        <>
        <h1 style={{color: "#0D87E3"}}>This is an intake form, {user.role.first_name}!</h1>
        {/* <h1>{appointment.intake.reason_for_visit}</h1> */}
        <form onSubmit={handleSubmit}>
            <FormField>
                <Label>Reason for Visit</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={reasonForVisit}
                onChange={(e) => setReasonForVisit(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label>When did it start?</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={onset}
                onChange={(e) => setOnset(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label>Where does it hurt?</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label>How many days has this gone on?</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label>How would you describe it?</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={characteristics}
                onChange={(e) => setCharacteristics(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label>What aggravating factors have you observed?</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={aggravatingFactors}
                onChange={(e) => setAggravatingFactors(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label>What helps to relieve that aggravation?</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={relievingFactors}
                onChange={(e) => setRelievingFactors(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label>When does it happen throughout the day? How severely?</Label>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={timingAndSeverity}
                onChange={(e) => setTimingAndSeverity(e.target.value)}
                />
            </FormField>
            <FormField>
                <Button color="secondary" type="submit">{isLoading ? "Loading..." : "Save"}</Button>
            </FormField>
        </form>
        </>
    )

}

export default IntakeForm;
