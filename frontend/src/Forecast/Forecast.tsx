import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Forecast.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 24
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    minWidth: 650,
  },
});


function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

export interface ForecastProps {
  cityName: string;
  wheatherData: any;
}


function Forecast({cityName, wheatherData}: ForecastProps) {
  const classes = useStyles();
  const rows = wheatherData ? wheatherData.list : [];
  return (
    <Card className={classes.root}>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="center">Temperatura</TableCell>
                <TableCell align="center">Sensación</TableCell>
                <TableCell align="center">Temp. Minima</TableCell>
                <TableCell align="center">Temp. Maxima</TableCell>
                <TableCell align="center">Pronostico</TableCell>
                <TableCell align="center">Leyenda</TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((d: any) => (
                <TableRow key={d.dt}>
                  <TableCell align="center">{d.dt_txt}</TableCell>
                  <TableCell align="center">{d.main.temp}</TableCell>
                  <TableCell align="center">{d.main.feels_like}</TableCell>
                  <TableCell align="center">{d.main.temp_min}</TableCell>
                  <TableCell align="center">{d.main.temp_max}</TableCell>
                  <TableCell align="center">{d.weather[0].main}</TableCell>
                  <TableCell align="center">{d.weather[0].description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </CardContent>
    </Card>
  );
}

export default Forecast;
