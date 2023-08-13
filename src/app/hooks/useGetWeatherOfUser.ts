import { useRef, useState } from 'react';

export default function useGetWeatherOfUser(weather: WeatherT) {
  const [isMetric, setIsMetric] = useState(true);
  const [selectedDate, setSelectedDate] = useState(0);
  const switchIsMetric = () => setIsMetric(!isMetric);
  const data = {
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
  const chartRef: any = useRef();

  return {
    data,
    chartRef,
    isMetric,
    setIsMetric,
    selectedDate,
    setSelectedDate,
    switchIsMetric,
  };
}
