import React from 'react';

import WeatherOfUser from './WeatherOfUser/WeatherOfUser';
import useWeatherWidgetData from '@/app/hooks/useWeatherWidgetData';
import WeatherOfLocation from './WeatherOfLocation/WeatherOfLocation';
import style from './WeatherWidget.module.scss';

type WeatherWidgetT = {
  weather: WeatherT;
  worldWeather: WeatherT[];
};

export default function WeatherWidget({
  weather,
  worldWeather,
}: WeatherWidgetT) {
  const { isMetric, switchIsMetric } = useWeatherWidgetData();
  return (
    <div className={style.weather}>
      <WeatherOfUser
        weather={weather}
        isMetric={isMetric}
        switchIsMetric={switchIsMetric}
      />
      <WeatherOfLocation
        worldWeather={worldWeather}
        isMetric={isMetric}
        switchIsMetric={switchIsMetric}
      />
    </div>
  );
}
