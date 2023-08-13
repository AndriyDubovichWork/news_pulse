import React, { useState, useRef } from 'react';
import style from './WeatherOfUser.module.scss';
import { registerables, Chart } from 'chart.js';

import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import WeatherDay from './WeatherDay/WeatherDay';
import useGetWeatherOfUser from '@/app/hooks/useGetWeatherOfUser';
Chart.register(...registerables);

export default function WeatherOfUser({ weather }: { weather: WeatherT }) {
  const {
    isMetric,
    selectedDate,
    setSelectedDate,
    switchIsMetric,
    data,
    chartRef,
  } = useGetWeatherOfUser(weather);

  return (
    <div className={style.byLocation}>
      <div className={style.general}>
        <div className={style.stats}>
          <img
            src={weather.forecast.forecastday[selectedDate].day.condition.icon}
            alt='weather icon'
            className={style.icon}
          />
          <h1 className={style.temp} onClick={switchIsMetric}>
            {isMetric
              ? weather.forecast.forecastday[selectedDate].day.avgtemp_c
              : weather.forecast.forecastday[selectedDate].day.avgtemp_f}
          </h1>
          <div className={style.subData}>
            <h3 className={style.row}>
              Precipitation{' '}
              {weather.forecast.forecastday[selectedDate].day.totalprecip_in}%
            </h3>
            <h3 className={style.row}>
              Precipitation{' '}
              {weather.forecast.forecastday[selectedDate].day.avghumidity}%
            </h3>
            <h3 className={style.row}>
              Precipitation{' '}
              {weather.forecast.forecastday[selectedDate].day.avgvis_km} km/h
            </h3>
          </div>
        </div>
        <div className={style.placeTime}>
          <p className={style.place}>
            {weather.location.name}, {weather.location.country}
          </p>
          <p className={style.time}>
            {weather.forecast.forecastday[selectedDate].date}
          </p>
        </div>
      </div>
      <Line
        ref={chartRef}
        plugins={[ChartDataLabels]}
        data={data}
        className={style.chart}
        options={{
          elements: {
            line: {
              tension: 0.25,
            },
            point: {
              radius: 1,
            },
          },
          plugins: {
            datalabels: {
              display: true,
              color: '#fff',
              anchor: 'end',
              formatter: Math.round,
              offset: -30,
              align: 'start',
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                display: false,
              },
            },
          },
        }}
      />
      <div className={style.days}>
        {weather.forecast.forecastday.map((forecastday, id) => {
          return (
            <WeatherDay
              forecastday={forecastday}
              switchDay={() => {
                setSelectedDate(id);
                let lineChart = chartRef.current;

                lineChart.update();
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
