import React from 'react';
import style from './WeatherDay.module.scss';
import dateToWeekName from '@/app/lib/dateToWeekName';

export default function WeatherDay({
  forecastday,
  switchDay,
  isSelected,
}: {
  switchDay: () => void;
  forecastday: Forecastday;
  isSelected: boolean;
}) {
  return (
    <div
      className={`${style.day} ${isSelected && style.selected}`}
      onClick={switchDay}
    >
      <p className={style.dayName}>{dateToWeekName(forecastday.date)}</p>
      <img src={forecastday.day.condition.icon} alt='weather img' />
      <div className={style.temp}>
        <p>{Math.round(forecastday.day.maxtemp_c)}</p>
        <p>{Math.round(forecastday.day.mintemp_c)}</p>
      </div>
    </div>
  );
}
