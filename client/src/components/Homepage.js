import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import HomepageWorkersList from "./HomepageWorkersList";
import HomepageApptComplete from "./HomepageApptComplete";
import HomepageApptSubmit from "./HomepageApptSubmit";


function Homepage({classes, userType}) {
    const [homepageView, setHomepageView] = useState("list") //options for list, apptcomplete, apptsubmit
    return (
        <>
        <Grid container className="homepage-top">
            <Grid item xs={4}>
                <Paper className={classes.homepage_top}>
                    <h4>Requested</h4>
                    <Paper className={classes.homepage_toplist}>
                        <span>
                            <p>Name: </p>
                            <p>Services: </p>
                            <p>Total Cost: </p>
                        </span>
                    </Paper>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.homepage_top}>
                    <h4>Upcoming</h4>
                        <Paper className={classes.homepage_toplist}>
                            <span>
                                <p>Name: </p>
                                <p>Services: </p>
                                <p>Total Cost: </p>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Mark as Complete
                                </Button>
                            </span>
                        </Paper>
                </Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.homepage_top}>
                    <h4>Completed</h4>
                        <Paper className={classes.homepage_toplist}>
                            <span>
                                <p>Name: </p>
                                <p>Services: </p>
                                <p>Total Cost: </p>
                                <p>Rating: </p>
                                <p>Review: </p>
                            </span>
                        </Paper>
                </Paper>
            </Grid>
        </Grid>
        <Grid className="homepage-bottom">
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {homepageView === "list"
                            ?<HomepageWorkersList classes={classes} setHomepageView={setHomepageView}/>
                            :homepageView === "apptcomplete"
                                ?<HomepageApptComplete classes={classes} setHomepageView={setHomepageView}/>
                                :<HomepageApptSubmit classes={classes} setHomepageView={setHomepageView}/>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Homepage;