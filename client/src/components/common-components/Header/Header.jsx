import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Backdrop from "@material-ui/core/Backdrop";
import cookies from "js-cookie";
import logo from "../../../assets/faceboom(2).png"
import "./header.css"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: "#4E1E61"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "transparent"
  }
}));
export default function Header({history}) { 
  const { state , dispatch } = useContext(GlobalContext);
  const {setOpen} = state;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           <img className="header-logo" src={logo} alt="" />
          </Typography>
          <Button color="inherit" onClick={() => {
            dispatch({
              type: "OPEN",
              payload: { setOpen: true }
            });
            setTimeout(() => {
              cookies.remove("token");
              history.push("/");
            }, 2000);
          }}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
      <Backdrop className={classes.backdrop} open={setOpen}>
        <div className="loading">
          <span>LOGGING OUT...</span>
        </div>
      </Backdrop>
    </div>
  )
}
