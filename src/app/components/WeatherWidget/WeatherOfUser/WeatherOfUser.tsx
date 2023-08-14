import React, { useState, useRef } from 'react';
import style from './WeatherOfUser.module.scss';

import WeatherDay from './WeatherDay/WeatherDay';
import useWeatherOfUserData from '@/app/hooks/useWeatherOfUserData';
import WeatherChart from './WeatherChart/WeatherChart';
import dateToWeekName from '@/app/lib/dateToWeekName';
import dateToHour from '@/app/lib/dateToHour';

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
  const { selectedDate, setSelectedDate, chartData } =
    useWeatherOfUserData(weather);

  return (
    <div className={style.byLocation}>
      <div className={style.general}>
        <div className={style.stats}>
          <img
            src={weather.forecast.forecastday[selectedDate].day.condition.icon}
            alt={weather.forecast.forecastday[selectedDate].day.condition.text}
            className={style.icon}
          />
          <h1 className={style.temp} onClick={switchIsMetric}>
            {isMetric
              ? weather.forecast.forecastday[selectedDate].day.avgtemp_c
              : weather.forecast.forecastday[selectedDate].day.avgtemp_f}
          </h1>
          <div className={style.subData}>
            <Row>
              <>
                Precipitation:
                {weather.forecast.forecastday[selectedDate].day.totalprecip_mm}
                mm
              </>
            </Row>
            <Row>
              <>
                Humidity:
                {weather.forecast.forecastday[selectedDate].day.avghumidity}%
              </>
            </Row>
            <Row>
              <>
                Wind:
                {weather.forecast.forecastday[selectedDate].day.avgvis_km} km/h
              </>
            </Row>
          </div>
        </div>
        <div className={style.placeTime}>
          <p className={style.place}>
            {weather.location.name}, {weather.location.country}
          </p>
          <p className={style.time}>
            {dateToWeekName(weather.current.last_updated)}{' '}
            {dateToHour(weather.current.last_updated)}
          </p>
        </div>
      </div>
      <WeatherChart chartData={chartData} />
      <div className={style.days}>
        {weather.forecast.forecastday.map((forecastday, id) => {
          return (
            <WeatherDay
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
