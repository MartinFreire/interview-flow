import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Forecast from "./Forecast/Forecast";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <Switch>
            <Route path="/miami">
              <Forecast cityName='Miami' cityId={'1'}/>
            </Route>
            <Route path="/los-angeles">
              <Forecast cityName='Los Angeles' cityId={'1'}/>
            </Route>
            <Route path="/london">
              <Forecast cityName='Londres' cityId={'1'}/>
            </Route>
            <Route path="/">
              <Forecast cityName='Buenos Aires' cityId={'1'}/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
