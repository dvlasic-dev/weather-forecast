import React from 'react';
import { WEATHER_STATES_DAY, WEATHER_STATES_NIGHT } from '../constants';
import '../styles/currentWeather.scss';

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 'C'
    };
    this.changeUnits = this.changeUnits.bind(this);
  }
  changeUnits(flag) {
    if (flag === 'C') {
      this.setState({ flag: 'F' });
    } else {
      this.setState({ flag: 'C' });
    }
  }
  render() {
    const {
      currentTemperatureC,
      currentTemperatureF,
      location,
      code,
      condition,
      isDay
    } = this.props;

    return (
      <section className="weatherDisplay">
        <div className="weatherDisplay-items">
          <img
            alt="Icon showing weather condition"
            src={isDay ? WEATHER_STATES_DAY[code] : WEATHER_STATES_NIGHT[code]}
          />
          <p style={{paddingTop: '1em'}}>
            <span>feels like </span>
            <span onClick={() => this.changeUnits(this.state.flag)}>
              {this.state.flag === 'C'
                ? `${currentTemperatureC}°C`
                : `${currentTemperatureF}°F`}
            </span>
          </p>
          <p>{condition}</p>
          <p>{location}</p>
        </div>
      </section>
    );
  }
}

export default CurrentWeather;
