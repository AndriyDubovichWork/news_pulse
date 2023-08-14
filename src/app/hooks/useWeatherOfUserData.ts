import { useRef, useState } from 'react';

export default function useWeatherOfUserData(weather: WeatherT) {
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
          ...weather.forecast.forecastday[selectedDate].hour.map(
            (hour, id) => hour.heatindex_c
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
