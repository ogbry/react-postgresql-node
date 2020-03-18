import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Backdrop from "@material-ui/core/Backdrop";
import cookies from "js-cookie";
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "transparent"
  }
}));
export default function Header({history}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           insert logo here
          </Typography>
          <Button color="inherit" onClick={() => {
            setOpen(true)
            setTimeout(() => {
              cookies.remove("token");
              history.push("/");
            }, 2000);
          }}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
      <Backdrop className={classes.backdrop} open={open}>
        <div className="loading">
          <span>LOGGING OUT...</span>
        </div>
      </Backdrop>
    </div>
  )
}
