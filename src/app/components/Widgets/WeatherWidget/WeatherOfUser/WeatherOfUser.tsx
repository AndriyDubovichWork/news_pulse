import React, { useState, useRef } from 'react';
import style from './WeatherOfUser.module.scss';

import WeatherDay from './WeatherDay/WeatherDay';
import useWeatherOfUserData from '@/app/hooks/useWeatherOfUserData';
import WeatherChart from './WeatherChart/WeatherChart';
import dateToWeekName from '@/app/lib/dateToWeekName';
import dateToHour from '@/app/lib/dateToHour';
import { Conditions, PlaceTime, Temp } from '../Reusable';

type WeatherOfUserT = {
  weather: WeatherT;
  isMetric: boolean;
  switchIsMetric: () => void;
};
const Row = ({ children }: { children: JSX.Element }) => {
  return <h3 className={style.row}>{children}</h3>;
};

export default function WeatherOfUser({
  weather,
  isMetric,
  switchIsMetric,
}: WeatherOfUserT) {
  const { selectedDate, setSelectedDate, chartData } = useWeatherOfUserData(
    weather,
    isMetric
  );

  return (
    <div className={style.byLocation}>
      <div className={style.general}>
        <div className={style.stats}>
          <Temp
            avgtempC={weather.forecast.forecastday[selectedDate].day.avgtemp_c}
            avgtempF={weather.forecast.forecastday[selectedDate].day.avgtemp_f}
            condition={weather.forecast.forecastday[selectedDate].day.condition}
            isMetric={isMetric}
            switchIsMetric={switchIsMetric}
          />

          <Conditions
            isMetric={isMetric}
            switchIsMetric={switchIsMetric}
            weather={weather}
          />
        </div>
        <PlaceTime weather={weather} />
      </div>
      <WeatherChart chartData={chartData} />
      <div className={style.days}>
        {weather.forecast.forecastday.map((forecastday, id) => {
          return (
            <WeatherDay
              key={forecastday.astro.moonrise}
              isMetric={isMetric}
              isSelected={id === selectedDate}
              forecastday={forecastday}
              switchDay={() => setSelectedDate(id)}
            />
          );
        })}
      </div>
    </div>
  );
}
