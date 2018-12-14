import React from 'react';
import { WEATHER_STATES_DAY } from '../constants';
import '../styles/forecast.scss';

const Forecast = ({ forecast }) => {
  return (
    <section className="dailyForecast">
      {forecast.map(item => (
        <div key={item.date} className="dailyForecast-item">
          <p>{new Date(item.date).toString().slice(0, 3)}</p>
          <img
            style={{ maxWidth: '100px', width: '100%', height: '70px' }}
            alt="Icon showing weather condition"
            src={WEATHER_STATES_DAY[item.day.condition.code]}
          />
          <p>
            {item.day.mintemp_c}° / {item.day.maxtemp_c}°C
          </p>
          <p>{item.day.condition.text}</p>
          <p>Humidity: {item.day.avghumidity}%</p>
          <p>Precipitation: {item.day.totalprecip_mm}mm</p>
        </div>
      ))}
    </section>
  );
};

export default Forecast;
