import axios from 'axios';

export default function getWeather(location: string) {
  type WeatherTRes = {
    data: WeatherT;
  };
  return axios
    .get<WeatherTRes, WeatherTRes>(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_Weather_apiKey}&q=${location}&days=7&aqi=no&alerts=no`
    )
    .then((res) => res.data);
}
