import getUserIp from '@/app/api/requests/getUserIp';
import React, { useEffect } from 'react';

export default function Weather({ weather }: { weather: WeatherT }) {
  return <div>{weather.current.cloud}</div>;
}
