import React, { useState } from 'react';
import style from './Weather.module.scss';
export default function Weather({ weather }: { weather: WeatherT }) {
  const [isCelsius, setIsCelsius] = useState(true);

  return (
    <div>
      <div className={style.general}>
        <div className={style.stats}>
          <img
            src={weather.current.condition.icon}
            alt='weather icon'
            className={style.icon}
          />
          <h1 className={style.temp}>
            {isCelsius ? weather.current.temp_c : weather.current.temp_f}
          </h1>
          <div className={style.subData}>
            <h3 className={style.row}>
              Precipitation {weather.current.precip_in}%
            </h3>
            <h3 className={style.row}>
              Precipitation {weather.current.humidity}%
            </h3>
            <h3 className={style.row}>
              Precipitation {weather.current.wind_kph} km/h
            </h3>
          </div>
        </div>
        <div className={style.placeTime}>
          <p className={style.place}>
            {weather.location.name}, {weather.location.country}
          </p>
          <p className={style.time}>{weather.current.last_updated}</p>
        </div>
      </div>
    </div>
  );
}
