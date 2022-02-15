import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import OwnerSignup from './OwnerSingup';
import ProviderSignup from './ProviderSignup';

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
        <Box sx={{ p: 5 }}>
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

function SignupTabs() {
  const [value, setValue] = React.useState(0);
  const [ownerToggle, setOwnerToggled] = React.useState(false)
  const [providerToggle, setProviderToggled] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleClick(e){
   let tab = e.target.value
    { tab == 'owner' ? setOwnerToggled(true) : setOwnerToggled(false) }
    { tab == 'pro' ? setProviderToggled(true) : setProviderToggled(false) }
  }

  return (
    <div id='signup'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Start Tracking" {...a11yProps(0)} />
            <Tab label="Find Customers" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div>Track your property’s maintenance needs and hire the right professionals that you can trust.</div>
          <br />
          { ownerToggle ? <OwnerSignup /> : null }
          { !ownerToggle ?
            <Button 
              variant="contained"
              value='owner'
              onClick={handleClick}
            >
            Get Started
          </Button> : null }
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>Get connected with property owners in your area.</div>
          <br />
          { providerToggle ? <ProviderSignup /> : null }
          { !providerToggle ?
          <Button
            variant="contained" 
            value='pro'
            onClick={handleClick}
          >
            Get Started
          </Button> : null }
        </TabPanel>
      </Box>
    </div>
  );
}

export default SignupTabs;
