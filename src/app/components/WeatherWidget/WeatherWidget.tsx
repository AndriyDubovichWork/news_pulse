import React from 'react';

import WeatherOfUser from './WeatherOfUser/WeatherOfUser';
import useWeatherWidgetData from '@/app/hooks/useWeatherWidgetData';

export default function WeatherWidget({ weather }: { weather: WeatherT }) {
  const { isMetric, switchIsMetric } = useWeatherWidgetData();
  return (
    <WeatherOfUser
      weather={weather}
      isMetric={isMetric}
      switchIsMetric={switchIsMetric}
    />
  );
}
