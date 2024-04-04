export type WeatherData = {
  weather: WeatherProps[];
  coord: CoordinateProps;
  main: TemperatureProps;
  wind: WindProps;
  sys: SunScheduleProps;
  name: string;
  dt: number;
};

export type WeatherProps = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CoordinateProps = {
  latitude: number;
  longitude: number;
};

export type TemperatureProps = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  ground_level: number;
};

export type WindProps = {
  speed: number;
  deg: number;
  gust: number;
};

export type SunScheduleProps = {
  country: string;
  sunrise: number;
  sunset: number;
};
