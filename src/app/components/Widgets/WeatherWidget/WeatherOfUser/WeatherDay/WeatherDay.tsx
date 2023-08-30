import React from 'react';
import style from './WeatherDay.module.scss';
import dateToWeekName from '@/app/lib/dateToWeekName';
import Icon from '@/app/components/Icon/Icon';

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
      <Icon
        size={64}
        src={'https:' + forecastday.day.condition.icon}
        name={forecastday.day.condition.text}
      />
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
