import React, { Suspense } from 'react';

import WeatherOfUser from './WeatherOfUser/WeatherOfUser';
import useWeatherWidgetData from '@/app/hooks/useWeatherWidgetData';
import WeatherOfCities from './WeatherOfLocation/WeatherOfCities';
import style from './WeatherWidget.module.scss';
import Error from '../../Error/Error';

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
  const incorrectData = !weather || !citiesWeather;

  return (
    <>
      {incorrectData ? (
        <Error message="couldn't get weather data" Heightvh={50} />
      ) : (
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
      )}
    </>
  );
}
