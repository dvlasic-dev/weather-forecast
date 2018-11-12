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
  1135: fog,
  1063: rainCloud,
  1066: snowCloud,
  1069: sleet,
  1072: ice,
  1114: snowCloud,
  1117: snowCloud,
  1147: fog,
  1150: rainCloud,
  1153: rainCloud,
  1168: rainCloud,
  1171: rainCloud,
  1180: rainCloud,
  1183: rainCloud,
  1186: rainCloud,
  1189: rainCloud,
  1192: rainCloud,
  1195: rainCloud,
  1198: rainCloud,
  1201: rainCloud,
  1204: sleet,
  1207: sleet,
  1210: snowCloud,
  1213: snowCloud,
  1216: snowCloud,
  1219: snowCloud,
  1222: snowCloud,
  1225: snowCloud,
  1237: ice,
  1240: rainCloud,
  1243: rainCloud,
  1246: rainCloud,
  1249: sleet,
  1252: sleet,
  1255: snowCloud,
  1258: snowCloud,
  1261: ice,
  1264: ice,
  1273: ice,
  1276: rainCloud,
  1279: snowCloud,
  1282: snowCloud
};
export const WEATHER_STATES_NIGHT = {
  1000: moon,
  1003: cloudyNight,
  1006: cloudyNight,
  1009: cloudy,
  1030: fog,
  1135: fog,
  1063: rainCloud,
  1066: snowCloud,
  1069: sleet,
  1072: ice,
  1114: snowCloud,
  1117: snowCloud,
  1147: fog,
  1150: rainCloud,
  1153: rainCloud,
  1168: rainCloud,
  1171: rainCloud,
  1180: rainCloud,
  1183: rainCloud,
  1186: rainCloud,
  1189: rainCloud,
  1192: rainCloud,
  1195: rainCloud,
  1198: rainCloud,
  1201: rainCloud,
  1204: sleet,
  1207: sleet,
  1210: snowCloud,
  1213: snowCloud,
  1216: snowCloud,
  1219: snowCloud,
  1222: snowCloud,
  1225: snowCloud,
  1237: ice,
  1240: rainCloud,
  1243: rainCloud,
  1246: rainCloud,
  1249: sleet,
  1252: sleet,
  1255: snowCloud,
  1258: snowCloud,
  1261: ice,
  1264: ice,
  1273: ice,
  1276: rainCloud,
  1279: snowCloud,
  1282: snowCloud
};
