import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function HomepageWorkersList({classes, setHomepageView}) {

    const handleClick = () => {
        setHomepageView("apptsubmit")
    }

    return (
        <>
            <h4>Helpers Available within 10 miles of ZIPCODE</h4>
            {/* For each helper matched, create a new list item */}
                <Paper className={classes.homepage_bottom}>
                    <Grid item xs={1}/>
                    <Grid item xs={2} className={classes.img}>
                        <img src="https://www.wikihow.com/images/thumb/7/7e/Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg/550px-nowatermark-Draw-a-Cartoon-Man-Step-15-preview-Version-2.jpg.webp"></img>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <span> */}
                            <h5>Service Prices</h5>
                            <p>Carpentry:</p>
                            <p>Lawncare:</p>
                            <p>Appliance Maintenance:</p>
                            <p>Pest Control:</p>
                            <p>Plumbing:</p>
                        {/* </span> */}
                    </Grid>
                    <Grid item xs={5}>
                        {/* <span> */}
                            <p>Rating: </p>
                            <p>Reviews: </p>
                            <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                            >
                            Book
                            </Button>
                        {/* </span> */}
                    </Grid>
                </Paper>
        </>
    )
}

export default HomepageWorkersList;