import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

import News from "./News"



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left'
    // color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container >

        <p className={classes.paper}>COMPEC'TEN HABERLER</p>
      <Grid container spacing={3} >
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={6}  >
        <News height={"auto"}/>
        </Grid>
        <Grid item xs={12} sm={6} >
         {/* <News/> */}
         <h5>Takvim</h5>
         <iframe src="https://calendar.google.com/calendar/embed?title=Put%20your%20Title%20here&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=8d3fc8l9g04n7r9im45fsn08ak%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FNew_York"  width="auto" height="400" frameborder="0" scrolling="no"></iframe>
      
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
      </Container>
    </div>
  );
}