import React from 'react';

import WeatherOfUser from './WeatherOfUser/WeatherOfUser';
import useWeatherWidgetData from '@/app/hooks/useWeatherWidgetData';
import WeatherOfCities from './WeatherOfLocation/WeatherOfCities';
import style from './WeatherWidget.module.scss';

type WeatherWidgetT = {
  weather: WeatherT;
  citiesWeather: WeatherT[];
};

export default function WeatherWidget({
  weather,
  citiesWeather,
}: WeatherWidgetT) {
  const { isMetric, switchIsMetric } = useWeatherWidgetData();
  return (
    <div className={style.weather}>
      <WeatherOfUser
        weather={weather}
        isMetric={isMetric}
        switchIsMetric={switchIsMetric}
      />
      <WeatherOfCities
        citiesWeather={citiesWeather}
        isMetric={isMetric}
        switchIsMetric={switchIsMetric}
      />
    </div>
  );
}
