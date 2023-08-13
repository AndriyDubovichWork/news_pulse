import React from 'react';
import style from './WeatherDay.module.scss';

export default function WeatherDay({
  forecastday,
  switchDay,
}: {
  switchDay: () => void;
  forecastday: Forecastday;
}) {
  const date = new Date(forecastday.date);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div className={style.day} onClick={switchDay}>
      <p className={style.dayName}>{dayName}</p>
      <img src={forecastday.day.condition.icon} alt='weather img' />
      <div className={style.temp}>
        <p>{Math.round(forecastday.day.maxtemp_c)}</p>
        <p>{Math.round(forecastday.day.mintemp_c)}</p>
      </div>
    </div>
  );
}
