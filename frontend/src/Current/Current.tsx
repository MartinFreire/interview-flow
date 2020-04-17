import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Current.css';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    marginTop: 12
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface CurrentProps {
  cityName: string;
  wheatherData: any;
}


function Current({cityName, wheatherData}: CurrentProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Ciudad
        </Typography>
        <Typography variant="h5" component="h2">
          {cityName} {`(${wheatherData.sys.country})`}
        </Typography>
        {/*
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        */}
        { wheatherData ? <img src={`http://openweathermap.org/img/w/${wheatherData.weather[0].icon}.png`}
                              className="imageIcon"
                              alt="estado"/> : <div>&nbsp;</div> }

        <Typography variant="body2" component="p">
          {wheatherData ? wheatherData.weather[0].main : ''}
          <br/>
          {wheatherData ? wheatherData.weather[0].description : ''}
          <br/>
          {wheatherData ? `Temp: ${wheatherData.main.temp}°C` : ''}
          <br/>
          {wheatherData ? `Temp. Min: ${wheatherData.main.temp_min}°C` : ''}
          <br/>
          {wheatherData ? `Temp. Max: ${wheatherData.main.temp_max}°C` : ''}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Current;
