import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },

    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));

export default function Body() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={100}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "25vh" }}
      >
        <Typography variant="h5" align="center">
          <p>Welcome to the Speech2Text Project! </p>
          <p>
            It's soul purpose is to unable users to process spoken language into
            written, copy-able one.{" "}
          </p>
          <p>Click the start button to try for yourself and have fun!</p>
        </Typography>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "40vh" }}
      >
        <Grid item xs={12} alignContent="center">
          <Fab size="large" color="primary" className={classes.fabButton}>
            Start
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}
