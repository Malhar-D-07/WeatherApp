import React, { useEffect } from "react";
import "./style.scss";
import { WEATHER_ICON_URL } from "../../constants/ApiConstants";
import { buildString, convertUtcToIstDate } from "../../utils";
import { WeatherProps, TemperatureProps } from "../../Types/Dashboard.types";

export default function HeroCard(props: { weather: WeatherProps; temperature: TemperatureProps; location: string; date: number }) {
  return (
    <>
      <div className="hero-card-wrapper">
        <div className="hero-card-weather flex-column">
          <img className="hero-card-weather__image" src={buildString(WEATHER_ICON_URL, ":image_name", props?.weather?.icon)} alt="weather-condition-image" />
          <span className="hero-card-weather__temperature">{props?.temperature?.temp} <sup>&deg;</sup>C</span>
          <span className="hero-card-weather__description">{props?.weather?.description}</span>
        </div>
        <hr className="divider"/>
        <div className="hero-card-location flex-column">
          <p className="hero-card-location__name">
            <span className="material-symbols-outlined">location_on</span>
            <span>{props?.location}</span>
          </p>
          <p className="hero-card-location__date">
            <span className="material-symbols-outlined">today</span>
            <span>{convertUtcToIstDate(props?.date.toString())}</span>
          </p>
        </div>
      </div>
    </>
  );
}
