import React from 'react';
import style from './CityWeather.module.scss';
import dateToWeekName from '@/app/lib/dateToWeekName';
import dateToHour from '@/app/lib/dateToHour';
import { Conditions, PlaceTime, Temp } from '../../Reusable';
type CityWeatherT = {
  weather: WeatherT;
  isMetric: boolean;
  switchIsMetric: () => void;
};

export default function CityWeather({
  weather,
  isMetric,
  switchIsMetric,
}: CityWeatherT) {
  return (
    <div className={style.city}>
      <div className={style.conditionNTime}>
        <Conditions
          isMetric={isMetric}
          weather={weather}
          switchIsMetric={switchIsMetric}
        />
        <PlaceTime weather={weather} isFull={false} />
      </div>
      <div className={style.temp}>
        <Temp
          avgtempC={weather.current.temp_c}
          avgtempF={weather.current.temp_f}
          condition={weather.current.condition}
          isMetric={isMetric}
          switchIsMetric={switchIsMetric}
        />
      </div>
    </div>
  );
}
