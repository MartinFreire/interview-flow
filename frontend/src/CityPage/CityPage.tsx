import React from 'react';
import Current from "../Current/Current";
import Forecast from "../Forecast/Forecast";
import {CircularProgress} from "@material-ui/core";
import './CityPage.css';


export interface CurrentProps {
  cityLabel: string;
  cityId?: string;
}

interface CurrentState extends CurrentProps{
  serverDataLocation: any;
  serverDataCurrent: any;
  serverDataForecast: any;
}

function initialState( props: CurrentProps ): CurrentState {
  return {
    cityId: undefined,
    ...props,
    serverDataLocation: null,
    serverDataCurrent: null,
    serverDataForecast: null
  };
}


class CityPage extends React.Component<CurrentProps, CurrentState> {

  state: CurrentState;

  constructor(props: CurrentProps) {
    super(props);
    this.state = initialState(props);
  }

  componentDidMount() {
    this.callServer();
  }

  componentDidUpdate(oldProps: CurrentProps) {
    console.log(this.state, this.props, oldProps);
    if ( this.props.cityId !== oldProps.cityId ) {
      this.setState(initialState(this.props));
    }
    this.callServer();
  }

  callServer() {
    if ( !this.state.cityId ) {
      console.log('cityId vacio, consulto ciudad local');
      fetch(`/v1/location`)
        .then( async resp => {
          const data = await resp.json();
          console.log('Server Resp', data);
          this.setState({
            serverDataLocation: null,
            serverDataCurrent: null,
            serverDataForecast: null,
            cityId: `${data.city},${data.countryCode}`,
            cityLabel: data.city
          });
        });
    }

    const serverData = this.state.serverDataForecast && this.state.serverDataCurrent;

    if ( this.state.cityId && !serverData ) {
      Promise.all([
        fetch(`/v1/current/${this.state.cityId}`),
        fetch(`/v1/forecast/${this.state.cityId}`)
      ])
        .then( async ( [respCurrent, respForecast])=> {
          const dataCurrent = await respCurrent.json();
          const dataForecast = await respForecast.json();
          console.log('Server Resp', dataCurrent);
          this.setState({
            serverDataCurrent: dataCurrent,
            serverDataForecast: dataForecast
          });
      });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.serverDataCurrent && this.state.serverDataForecast ?
            <div className="boxGroup">
              <Current cityName={this.state.cityLabel} wheatherData={this.state.serverDataCurrent}/>
              <Forecast cityName={this.state.cityLabel} wheatherData={this.state.serverDataForecast}/>
            </div>
            :
            <CircularProgress size={200}/>
        }
      </div>
    );
  }
}

export default CityPage;
