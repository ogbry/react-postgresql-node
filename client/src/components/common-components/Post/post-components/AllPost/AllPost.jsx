import React, {useCallback, useEffect, useContext} from 'react';
import { GlobalContext } from "../../../../../context/GlobalState";
import { get } from "../../../../../utils/api";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Grid from '@material-ui/core/Grid';
import LaunchIcon from '@material-ui/icons/Launch';
import EditDelete from "./EditDelete";
import TimeAgo from 'react-timeago'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AllPost() {
  const { state, dispatch } = useContext(GlobalContext);
  const { allPost } = state;
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
          allPost.map(res => {
            return ( 
              <>
              <List className={classes.root} key={res.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={res.avatar} />
                    </ListItemAvatar>
                          <ListItemText
                            primary={
                            <React.Fragment>
                              @{`${res.firstname}`} - <TimeAgo date={res.date_created}/>
                            </React.Fragment>}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.inline}
                                  color="textPrimary"
                                  height={{height: 100}}
                                >
                                {res.text}
                                </Typography>
                                <br/><br/>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                     <Grid container spacing={3}>
                                          <Grid item xs={3}>
                                            <FavoriteBorderIcon />
                                          </Grid>
                                          <Grid item xs={3}>
                                            <ChatBubbleOutlineIcon />
                                          </Grid>
                                          <Grid item xs={3}>
                                            <LaunchIcon/>
                                          </Grid>
                                          <Grid item xs={3}>
                                          </Grid>
                                        </Grid>
                                </Typography>
                              </React.Fragment>
                            }
                          />
                      <ListItemSecondaryAction>
                            <EditDelete/>
                      </ListItemSecondaryAction>
                  </ListItem>            
                  <Divider variant="inset" component="li" />
                  </List>
              </>
          );
            
          }) 

  );
}