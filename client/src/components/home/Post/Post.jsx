import React,{useCallback, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddPost from './post-components/AddPost/AddPost';
import AllPost from './post-components/AllPost/AllPost';
import { get } from "../../../utils/api";
import { GlobalContext } from "../../../context/GlobalState";
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
  const { dispatch } = useContext(GlobalContext);
  const renderState = useCallback(
    () => {
      get("/api/getPosts")
      .then(async res => {
        let data = await res.data;
        dispatch({type: "POST", payload:{ allPost: [...data] }}, )
      })
      .catch(error => console.log(error.response.data));
    },
    [dispatch],
  )
  useEffect(()=> {
    renderState();
  }, [renderState])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Left Side</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><AddPost renderState={renderState}/></Paper><br/>
          <Paper className={classes.paper}><AllPost/></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Right Side</Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}
