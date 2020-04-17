import React    from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}               from 'react-router-dom';
import Navbar   from './Navbar/Navbar';
import CityPage from "./CityPage/CityPage";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <Switch>
            <Route path="/rio-janeiro">
              <CityPage cityLabel='Rio de Janeiro' cityId={'Rio de Janeiro, Brasil'}/>
            </Route>
            <Route path="/miami">
              <CityPage cityLabel='Miami' cityId={'Miami, US'}/>
            </Route>
            <Route path="/los-angeles">
              <CityPage cityLabel='Los Angeles' cityId={'Los Angeles, US'}/>
            </Route>
            <Route path="/london">
              <CityPage cityLabel='Londres' cityId={'London,uk'}/>
            </Route>
            <Route path="/san-petersburgo">
              <CityPage cityLabel='San Petersburgo' cityId={'Saint Petersburg'}/>
            </Route>
            <Route path="/">
              <CityPage cityLabel=''/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
