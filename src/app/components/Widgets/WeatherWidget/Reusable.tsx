import React from 'react';
import style from './Reusable.module.scss';
import dateToWeekName from '@/app/lib/dateToWeekName';
import dateToHour from '@/app/lib/dateToHour';

type ConditionsT = {
  weather: WeatherT;
  isMetric: boolean;
  switchIsMetric: () => void;
};

const Row = ({ children }: { children: JSX.Element }) => {
  return <h3 className={style.row}>{children}</h3>;
};
export function Conditions({ switchIsMetric, weather, isMetric }: ConditionsT) {
  return (
    <div className={style.conditions} onClick={switchIsMetric}>
      <Row>
        <>
          Precipitation:
          {isMetric ? weather.current.precip_mm : weather.current.precip_in}
          {isMetric ? 'mm' : 'in'}
        </>
      </Row>
      <Row>
        <>
          Humidity:
          {weather.current.humidity}%
        </>
      </Row>
      <Row>
        <>
          Wind:
          {isMetric ? weather.current.wind_kph : weather.current.wind_mph}
          {isMetric ? 'kmh' : 'mph'}
        </>
      </Row>
    </div>
  );
}

type PlaceTimeT = {
  weather: WeatherT;
  isFull?: boolean;
};
export function PlaceTime({ weather, isFull = true }: PlaceTimeT) {
  return (
    <div className={style.placeTime}>
      <p>
        {weather.location.name}
        {isFull && ',' + weather.location.country}
      </p>
      <p>
        {dateToWeekName(weather.current.last_updated)}{' '}
        {dateToHour(weather.current.last_updated)}
      </p>
    </div>
  );
}

type TempT = {
  isMetric: boolean;
  condition: {
    icon: string;
    text: string;
  };
  switchIsMetric: () => void;
  avgtempC: number;
  avgtempF: number;
};
export function Temp({
  isMetric,
  avgtempC,
  avgtempF,
  condition,
  switchIsMetric,
}: TempT) {
  return (
    <>
      <img src={condition.icon} alt={condition.text} className={style.icon} />
      <h1 className={style.temp} onClick={switchIsMetric}>
        {isMetric ? avgtempC : avgtempF}
        <h3 className={style.tempUnit}>{isMetric ? '°C' : '°F'}</h3>
      </h1>
    </>
  );
}
