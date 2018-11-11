import {
  sun,
  cloudy,
  cloudyNight,
  cloudySun,
  fog,
  moon,
  rainCloud,
  sleet,
  snowCloud,
  wind,
  ice
} from '../assets/';

export const GEO_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
export const BASE_URL = 'https://api.apixu.com/v1/forecast.json?key=';
export const API_KEY = 'c236d4078d914177a76204248181011';

export const WEATHER_STATES_DAY = {
  1000: sun,
  1003: cloudySun,
  1006: cloudy,
  1009: cloudy,
  1030: fog,
  1135: fog
};
export const WEATHER_STATES_NIGHT = {
  1000: moon,
  1003: cloudyNight,
  1006: cloudyNight,
  1009: cloudy,
  1030: fog,
  1135: fog
};
