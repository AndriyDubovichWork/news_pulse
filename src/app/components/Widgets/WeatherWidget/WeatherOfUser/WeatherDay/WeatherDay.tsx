import React from 'react';
import style from './WeatherDay.module.scss';
import dateToWeekName from '@/app/lib/dateToWeekName';

type WeatherDayT = {
  switchDay: () => void;
  forecastday: Forecastday;
  isSelected: boolean;
  isMetric: boolean;
};

export default function WeatherDay({
  forecastday,
  switchDay,
  isSelected,
  isMetric,
}: WeatherDayT) {
  return (
    <div
      className={`${style.day} ${isSelected && style.selected}`}
      onClick={switchDay}
    >
      <p className={style.dayName}>{dateToWeekName(forecastday.date)}</p>
      <img src={forecastday.day.condition.icon} alt='weather img' />
      <div className={style.temp}>
        <p>
          {Math.round(
            isMetric ? forecastday.day.maxtemp_c : forecastday.day.maxtemp_f
          )}
          °
        </p>
        <p>
          {Math.round(
            isMetric ? forecastday.day.mintemp_c : forecastday.day.mintemp_f
          )}
          °
        </p>
      </div>
    </div>
  );
}
