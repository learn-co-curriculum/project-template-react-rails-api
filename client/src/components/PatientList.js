import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

//WIP
// async function getPatients(){
//     const res = await fetch(`/users/${user.id}/patients`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringi
//     })
// }

// getPatients();

function PatientList({ user }) {
    const classes = useStyles();
    const xsNum = 6;
    const smNum = 2;
    
    return (
        <>
        <h1>This is your patient list, {user.role.first_name}!</h1>
        <div className="flex-container">
            <div className={classes.root}>

            </div>    
        </div>
        </>
    )

}

export default PatientList;
