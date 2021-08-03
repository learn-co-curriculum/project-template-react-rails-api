import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import React, {useState} from "react";

function HomepageApptComplete({classes, setHomepageView}) {
    const [tip, setTip] = useState(0);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);

    const handleClick = () => {
        setHomepageView("list")
    }

    return (
        <>
        <h4>Complete Appointment</h4>
            {/* For each helper matched, create a new list item */}
                <Paper className={classes.homepage_bottom}>
                    <Grid item xs={1}/>
                    <Grid item xs={2} className={classes.img}>
                        <img src="https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp"></img>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <span> */}
                            <h5>Service Provided</h5>
                            <p>Carpentry:</p>
                            <p>Lawncare:</p>
                            <p>Appliance Maintenance: </p>
                            {tip ? <p>Tip: {tip}</p> : null}
                            <p>Total Cost: $$ + {tip}</p>
                        {/* </span> */}
                    </Grid>
                    <Grid item xs={5}>
                        <form className={classes.form} noValidate>
                            <p>Leave a tip for HELPER BOB: </p>
                            <FilledInput
                                className={classes.form_width}
                                variant="filled"
                                margin="normal"
                                id="tip"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                onChange={(e)=>{setTip(`$${e.target.value}`)}}
                            />
                            <p>Rating: </p>
                            <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e)=>{setRating(e.target.value)}}/>
                            <TextField
                                className={classes.review_width}
                                variant="filled"
                                margin="normal"
                                fullWidth
                                multiline
                                rows={3}
                                id="review"
                                label="Tell us about your experience!"
                                onChange={(e)=>{setReview(e.target.value)}}
                            />
                            <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                            >
                            Complete Appointment
                            </Button>
                        </form>
                    </Grid>
                </Paper>
        </>
    )
}

export default HomepageApptComplete;