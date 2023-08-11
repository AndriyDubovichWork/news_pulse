import React, { useState } from 'react';
import style from './Weather.module.scss';
import { registerables, Chart } from 'chart.js';

import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function Weather({ weather }: { weather: WeatherT }) {
  const [isMetric, setIsMetric] = useState(true);
  Chart.register(...registerables);

  const data = {
    labels: [
      ...weather.forecast.forecastday[0].hour.map((hour, id) =>
        id % 2 ? hour.time.split(' ')[1] : ''
      ),
    ],
    datasets: [
      {
        label: '',
        data: [
          ...weather.forecast.forecastday[0].hour.map(
            (hour) => hour.heatindex_c
          ),
        ],
        borderColor: '#FCC54C',
        backgroundColor: '#FCC54C',
      },
    ],
  };

  return (
    <div className={style.byLocation}>
      <div className={style.general}>
        <div className={style.stats}>
          <img
            src={weather.current.condition.icon}
            alt='weather icon'
            className={style.icon}
          />
          <h1 className={style.temp}>
            {isMetric ? weather.current.temp_c : weather.current.temp_f}
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
      <Line
        plugins={[ChartDataLabels]}
        data={data}
        className={style.chart}
        options={{
          elements: {
            line: {
              tension: 0.25,
            },
          },
          plugins: {
            datalabels: {
              display: true,
              color: '#fff',
              formatter: Math.round,
              anchor: 'end',
              offset: -30,
              align: 'start',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      {weather.forecast.forecastday.map((forecastday) => {
        return <p>{forecastday.day.avgtemp_c}</p>;
      })}
    </div>
  );
}
