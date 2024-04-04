import axios from "axios";
import { WEATHER_BASE_URL } from "../constants/ApiConstants";

export const getCityWeather = (cityName: string) => {
  let finalUrl = getWeatherUrl(cityName);
  return axios.get(finalUrl);
};

const getWeatherUrl = (cityName: string): string => {
  return `${WEATHER_BASE_URL}?q=${cityName}&appid=da1e999a5feb5b7628bcdb259259227c&units=metric`;
  // return `${WEATHER_BASE_URL}?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};
