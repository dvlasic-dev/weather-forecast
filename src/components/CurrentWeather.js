import React from 'react';
import { WEATHER_STATES_DAY, WEATHER_STATES_NIGHT } from '../constants';
import '../styles/currentWeather.scss';

const CurrentWeather = ({
  currentTemperatureC,
  location,
  code,
  condition,
  isDay
}) => {
  return (
    <section className="weatherDisplay">
      <div className="weatherDisplay-items">
        <img
          alt="Icon showing weather condition"
          src={isDay ? WEATHER_STATES_DAY[code] : WEATHER_STATES_NIGHT[code]}
        />
        <p>
          <span>feels like </span>
          {currentTemperatureC}&deg;C
        </p>
        <p>{condition}</p>
        <p>{location}</p>
      </div>
    </section>
  );
};

export default CurrentWeather;
