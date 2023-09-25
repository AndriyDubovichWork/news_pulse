import React from 'react';

import WeatherOfUser from './WeatherOfUser/WeatherOfUser';
import useWeatherWidgetData from '@/app/hooks/useWeatherWidgetData';
import WeatherOfCities from './WeatherOfLocation/WeatherOfCities';
import style from './WeatherWidget.module.scss';

type WeatherWidgetT = {
  weather: WeatherT;
  isWideScreen: boolean;
  citiesWeather: WeatherT[];
};

export default function WeatherWidget({
  weather,
  isWideScreen,
  citiesWeather,
}: WeatherWidgetT) {
  const { isMetric, switchIsMetric } = useWeatherWidgetData();

  return (
    <div className={isWideScreen ? style.weather : style.small}>
      {isWideScreen && (
        <WeatherOfUser
          weather={weather}
          isMetric={isMetric}
          switchIsMetric={switchIsMetric}
        />
      )}
      <WeatherOfCities
        isWideScreen={isWideScreen}
        citiesWeather={citiesWeather}
        isMetric={isMetric}
        switchIsMetric={switchIsMetric}
      />
    </div>
  );
}
