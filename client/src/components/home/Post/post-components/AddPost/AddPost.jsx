import React, { useContext } from "react";

import { GlobalContext } from "../../../../../context/GlobalState";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ImageIcon from '@material-ui/icons/Image';
import "./addpost.css"
import 'emoji-mart/css/emoji-mart.css'
import Emoji from "./Emoji";
import TextField from '@material-ui/core/TextField';
import jwtToken from "../../../../../utils/jwtToken";
const useStyles = makeStyles(theme => ({
  button: {
    color: "white",
    backgroundColor: "#ba68c8",
    margin: theme.spacing(1),
  },
}));
export default function AddPost({renderState}) {
  const userObj = jwtToken();
  const userId = userObj.id;
  const { Post, state, dispatch } = useContext(GlobalContext);
  const { text } = state;
  const {handleInput, handleSubmit} = Post;
  const classes = useStyles();

  return (
    <form onSubmit={(e) => {
      handleSubmit(e, dispatch, userId, renderState)
    }}>
    <div className="top">
      <div className="top-details"><Avatar  src={userObj.avatar} />
        <p>{userObj.firstname} {userObj.lastname}</p>
      </div>
    </div>
    <br/>
    <div className="center">
         <TextField
          placeholder="What's on your mind today?"
          label="Add a status"
          type="text"
          name="text"
          autoComplete="off"
          variant="outlined"
          value={text}
          fullWidth
          onChange={(e) => {
           handleInput(e, dispatch)
          }}
          required
         /><br/>
         <div className="center-details">
          <PhotoCameraIcon/>&nbsp;&nbsp;
          <ImageIcon/>&nbsp;&nbsp;
          <Emoji/>
         </div>
    </div>
    <br/>
    <div className="bottom">
    <Button
        variant="contained"
        className={classes.button}
        endIcon={<SendIcon></SendIcon>}
        type="submit"
      >
        POST
      </Button>
     </div>
  </form>
  )
}
