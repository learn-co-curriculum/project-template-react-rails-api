// import React from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


function SignUp( {classes, userStatus, setUserStatus} ) {

    const handleSignUp = (data) => {
        console.log(data)
    }
    
    return (
        <div>
            <div className="sign-up-type">
                <h2 className="sign-up-header">Sign up for an account below</h2>
                <h5>Select account type:</h5>
                <Button 
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e)=>setUserStatus('helper')}
                >
                    Helper
                </Button>
                <Button 
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e)=>setUserStatus('customer')}
                >
                    Customer
                </Button>
            </div>
            <div className="signup-render">
                <Container component="main" maxWidth="xs">
                    <form className={classes.form} noValidate onSubmit={handleSignUp}>
                        <TextField
                        variant="filled"
                        // margin="normal"
                        // required
                        fullWidth
                        id="name-required"
                        label="First and Last Name"
                        helperText="*Required"
                        autoFocus
                        // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                        // value={enterLoginUsername}
                        />
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        helperText="*Required"
                        autoFocus
                        // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                        // value={enterLoginUsername}
                        />
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        helperText="*Required"
                        // onChange={(e)=>{setEnterLoginPD(e.target.value)}}
                        // value={enterLoginPD}
                        />
                        <Link to="/account" style={{color: 'inherit', textDecoration: 'none'}}>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </form>
                </Container>
            </div>       
        </div>
    )
}

export default SignUp;