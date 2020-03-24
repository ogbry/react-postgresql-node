import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddPost from './post-components/AddPost/AddPost';
import AllPost from './post-components/AllPost/AllPost';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Post() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Left Side</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><AddPost/></Paper><br/>
          <Paper className={classes.paper}><AllPost/></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Right Side</Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}
