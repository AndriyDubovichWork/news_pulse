import React, { useState } from 'react';
import style from './Weather.module.scss';
import { registerables, Chart } from 'chart.js';

import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Weather from './WeatherOfUser/WeatherOfUser';

export default function WeatherWidget({ weather }: { weather: WeatherT }) {
  return <Weather weather={weather} />;
}
