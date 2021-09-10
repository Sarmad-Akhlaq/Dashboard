import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Date from './Date'
import Upload from './Upload';
import Chart from './Chart';
import Time from './Time';
import LandScape from './LandScape'
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import ZoomChart from './ZoomChart';
import Table from './Table';
import Table2 from './Table2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2}>
          <Paper elevation={3} className={classes.paper} style={{height: "5rem"}}>
            <Upload />
          </Paper>
        
          <Paper elevation={3} className={classes.paper} style={{marginTop: "1rem", height: "11.5rem"}}>
            <h4 style={{marginTop: "-0.8rem"}}>Perfect Order Rate</h4>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} className={classes.paper} >
            <Date />
          </Paper>

          <Paper elevation={3} className={classes.paper} style={{marginTop: "1rem", height: "11.5rem"}} >
          <h5 style={{marginTop: "-0.8rem"}}>On Time Delievery</h5>
            <Time />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={5} >
          <Paper elevation={3} className={classes.paper} style={{height: "17.5rem"}}>
            <LandScape />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper elevation={3} className={classes.paper} style={{height: "5.1rem"}}>
            <Day1 />
          </Paper>
          <Paper elevation={3} className={classes.paper} style={{marginTop: "1.2rem", height: "5.1rem"}}>
            <Day2 />
          </Paper>
          <Paper elevation={3} className={classes.paper} style={{marginTop: "1rem", height: "5.1rem"}}>
            <Day3 />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper elevation={3} className={classes.paper} style={{height: "17rem"}}>
            <ZoomChart />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper elevation={3} className={classes.paper} style={{height: "17rem"}}>
            <Table />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper elevation={3} className={classes.paper} style={{height: "17rem"}}>
            <Table2 />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}