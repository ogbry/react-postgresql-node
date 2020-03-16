import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    display: "flex"
  },
  paper: {
    margin: 400
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Login />
          <Box mt={5}></Box>
        </form>
      </div>
    </div>
  );
}
