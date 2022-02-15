import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%', marginLeft: '25%', marginTop: '10%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Start Tracking" {...a11yProps(0)} />
          <Tab label="Find Customers" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>Track your property’s maintenance needs and hire the right professionals that you can trust.</p>
        <br />
        <Button variant="contained" sx={{ backgroundColor: '#757de8'}}>
          Get Started
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>Get connected with property owners in you’re area.</p>
        <br />
        <Button variant="contained" sx={{ backgroundColor: '#757de8'}}>
          Get Started
        </Button>
      </TabPanel>
    </Box>
  );
}

export default SignupTabs;
