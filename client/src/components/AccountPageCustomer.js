import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function AccountPageCustomer({classes, view, setView}) {
    const handleAccountEdit = () => {
        setView("edit")
    }

    const handleAccountView = () => {
        setView("view")
    }

    return (
        <div>
            {view === "view"
                ?<>
                    <h2>Customer Account Details</h2>
                    <p>Name: </p>
                    <p>Location:</p>
                    <p>Budget/Month:</p>
                    <p>Username:</p>
                    <p>Password:</p>
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleAccountEdit}
                    >
                        Edit
                    </Button>
                </>
                : 
                <>
                    <h2>Edit Customer Account Details</h2>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                                // value={enterLoginUsername}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                id="location"
                                label="Location (Postal Code)"
                                autoFocus
                                // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                                // value={enterLoginUsername}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                id="budget"
                                label="Budget/Month"
                                autoFocus
                                // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                                // value={enterLoginUsername}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                id="username"
                                label="Username"
                                autoFocus
                                // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                                // value={enterLoginUsername}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                // onChange={(e)=>{setEnterLoginPD(e.target.value)}}
                                // value={enterLoginPD}
                            />
                            <div className="edit-btn-grp">
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleAccountView}
                                >
                                    Save
                                </Button>
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleAccountView}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                </>
            }
        </div>
    )
};

export default AccountPageCustomer;