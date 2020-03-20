import React from 'react';
import { Paper, Tab, Tabs, Typography, Box } from '@material-ui/core'
import MockPost from './mypost/Posts'
import Followers from './followers/Followers'
import Following from './following/Following'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Posts" />
        <Tab label="Followers" />
        <Tab label="Following" />
      </Tabs>

      <div className="panels">
        <TabPanel value={value} index={0}>
            <div style={{height: '550px', overflow: 'auto'}}>
                <MockPost />
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div style={{height: '550px', overflow: 'auto', padding: '0px 30px'}}>
                <Followers />
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <div style={{height: '550px', overflow: 'auto', padding: '0px 30px'}}>
                <Following />
            </div>
        </TabPanel>
      </div>
    </Paper>
  );
}