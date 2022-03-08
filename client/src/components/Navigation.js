import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Navigation({user, isAuthenticated, setIsAuthenticated, setUser}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
    function logout() {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }

    return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Home" {...a11yProps(0)} component={Link} to='/' />
              <Tab label="Add New Game" {...a11yProps(1)} component={Link} to='/newBG' />
              {/* <Tab label="Login" {...a11yProps(2)} component={Link} to='/login' /> */}
              {user?<Tab onClick={logout} label="Logout" {...a11yProps(2)} />:<Tab label="Login" {...a11yProps(3)} component={Link} to='/login' />}
            </Tabs>
          </Box>
        </Box>
      );
    // return (
    //     <> 
   
    //      <div>
    //       {user?<h1 onClick={logout}> Logout</h1>:<h1><Link to="/login"> Login</Link></h1>}
    //        <h1><Link to="/sign_up"> Sign Up</Link></h1>
    //        <h1><Link to="/"> Home</Link></h1>
    //        {isAuthenticated ? <p>yes</p> : <p>no</p>}
    //      </div>

    //     </>
    // )
}

export default Navigation;