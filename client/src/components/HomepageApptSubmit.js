import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import React, {useState} from "react";

function HomepageApptSubmit({classes, setHomepageView}) {
    const [services, setService] = useState([])
    const [timeslot, setTimeslot] = useState("")

    const handleAppt = (e) => {
        console.log(e)
    }

    const onAddService = (e) => {
        setService([...services, e.target.getAttribute('value')])
    }

    const onSelectedTimeslot = (e) => {
        setTimeslot(e.target.textContent)
    }
    console.log(timeslot)

    return (
        <>
        <h4>Submit Appointment Request</h4>
            {/* For each helper matched, create a new list item */}
                <Paper className={classes.homepage_bottom}>
                    <Grid item xs={1}/>
                    <Grid item xs={3}>
                        {/* <span> */}
                            <h5>Service Prices: </h5>
                            <p>Carpentry: <Icon value="carpenter" className="add_icon" onClick={onAddService}>add_circle</Icon>
                            </p>
                            <p>Lawncare: <Icon value="yardwork" className="add_icon" onClick={onAddService}>add_circle</Icon></p>
                            <p>Appliance Repair: <Icon value="appliance" className="add_icon" onClick={onAddService}>add_circle</Icon></p>
                            <p>Pest Control: <Icon value="pestcontrol" className="add_icon" onClick={onAddService}>add_circle</Icon></p>
                            <p>Plumbing: <Icon value="plumber" className="add_icon" onClick={onAddService}>add_circle</Icon></p>
                        {/* </span> */}
                    </Grid>
                    <Grid item xs={7}>
                        <h5>Timeslots Available: </h5>
                        <Grid container>
                            {/* map timeslot times to below */}
                            <Grid item xs={2}>
                                <Button 
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.timeslot}
                                    onClick={onSelectedTimeslot}
                                    >
                                TIME
                                </Button>
                            </Grid>                     
                        </Grid>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e)=>{handleAppt(e)}}
                            >
                        Submit Appointment Request
                        </Button>
                    </Grid>
                </Paper>
        </>
    )
}

export default HomepageApptSubmit;