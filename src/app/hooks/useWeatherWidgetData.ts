import { useState } from 'react';

export default function useWeatherWidgetData() {
  const [isMetric, setIsMetric] = useState(true);
  const switchIsMetric = () => setIsMetric(!isMetric);

  return {
    isMetric,
    setIsMetric,
    switchIsMetric,
  };
}
