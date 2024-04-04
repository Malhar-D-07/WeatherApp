import React, { useState, useEffect } from "react";
import "./style.scss";
import "../../common/styles.scss";
import InputForm from "../InputForm/InputForm";
import CardWrapper from "../CardWrapper/CardWrapper";
import HeroCard from "../Cards/HeroCard";
import { getCityWeather } from "../../services/DashoardService";
import { WeatherData } from "../../Types/Dashboard.types";
import MiniCard from "../Cards/MiniCard";
import { convertUtcToIstTime } from "../../utils";
import Loader from "../Loader";
import ErrorPage from "../ErrorPage";

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async (event: React.MouseEvent<HTMLButtonElement>, cityName: string) => {
    try {
      setIsLoading(true);
      setHasError(false);
      event.preventDefault();
      const { data } = await getCityWeather(cityName);
      setWeatherData(data);
    } catch (error) {
      setHasError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
      localStorage.setItem("searchedCity", cityName);
    }
  };

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const lastSearchedCity = localStorage.getItem("searchedCity");
        if (lastSearchedCity) {
          const { data } = await getCityWeather(lastSearchedCity);
          setWeatherData(data);
        }
      } catch (e) {
        setHasError(true);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="app-wrapper">
      <InputForm fetchData={fetchData} />
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorPage />
      ) : (
        <div className="all-cards-wrapper">
          {weatherData?.weather && (
            <>
              <CardWrapper>
                <HeroCard weather={weatherData?.weather[0]} temperature={weatherData?.main} location={weatherData.name} date={weatherData.dt} />
              </CardWrapper>
              <div className="mini-cards-wrapper">
                <MiniCard propertyName="humidity" value={weatherData?.main.humidity.toString()} />
                <MiniCard propertyName="pressure" value={weatherData?.main.pressure.toString()} />
                <MiniCard propertyName="sunrise" value={convertUtcToIstTime(weatherData?.sys.sunrise.toString())} />
                <MiniCard propertyName="sunset" value={convertUtcToIstTime(weatherData?.sys.sunset.toString())} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
