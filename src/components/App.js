import React, { Component } from 'react';
import '../styles/App.scss';
import { Search, CurrentWeather, Forecast } from './index';
import axios from 'axios';
import { GEO_OPTIONS, BASE_URL, API_KEY } from '../constants/';
import { setTimeout } from 'core-js';

const error = err => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      latitude: 0,
      longitude: 0,
      city: '',
      data: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.success = this.success.bind(this);
  }
  onSearchChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  onSubmitChange(event) {
    event.preventDefault();
    axios(`${BASE_URL}${API_KEY}&q=${this.state.inputValue}&days=7`)
      .then(result => this.setState({ data: result.data }))
      .catch(error => error);
    setTimeout(() => {
      console.log(this.state.data);
    }, 1000);
  }
  success(pos) {
    const crd = pos.coords;

    this.setState({ latitude: crd.latitude, longitude: crd.longitude });
    axios(
      `${BASE_URL}${API_KEY}&q=${this.state.latitude},${
        this.state.longitude
      }&days=7`
    )
      .then(result => this.setState({ data: result.data }))
      .catch(error => error);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, error, GEO_OPTIONS);

    setTimeout(() => {
      console.log(this.state.data);
    }, 1000);
  }

  render() {
    const { inputValue, data } = this.state;
    return (
      <div className="App">
        <Search
          onSubmit={this.onSubmitChange}
          onChange={this.onSearchChange}
          value={inputValue}
        />
        {data ? (
          <CurrentWeather
            currentTemperatureC={data.current.feelslike_c}
            currentTemperatureF={data.current.feelslike_f}
            location={data.location.name}
            condition={data.current.condition.text}
            code={data.current.condition.code}
            isDay={data.current.is_day}
          />
        ) : null}
        {data ? <Forecast forecast={data.forecast.forecastday} />  : null}
      </div>
    );
  }
}

export default App;
