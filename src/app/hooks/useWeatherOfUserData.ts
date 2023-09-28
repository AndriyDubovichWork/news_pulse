import { useState } from 'react';

export default function useWeatherOfUserData(
  weather: WeatherT,
  isMetric: boolean
) {
  const [selectedDate, setSelectedDate] = useState(0);
  const chartData = {
    labels: [
      ...weather.forecast.forecastday[selectedDate].hour.map((hour, id) =>
        id % 2 ? hour.time.split(' ')[1] : ''
      ),
    ],
    datasets: [
      {
        label: '',
        data: [
          ...weather.forecast.forecastday[selectedDate].hour.map((hour, id) =>
            isMetric ? hour.heatindex_c : hour.heatindex_f
          ),
        ],
        borderColor: '#FCC54C',
        backgroundColor: '#FCC54C',
      },
    ],
  };

  return {
    chartData,
    selectedDate,
    setSelectedDate,
  };
}
