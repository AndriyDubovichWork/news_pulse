import React from 'react';
import CityWeather from './CityWeather/CityWeather';

type WeatherOfCitiesT = {
  citiesWeather: WeatherT[];
  isMetric: boolean;
  switchIsMetric: () => void;
};

export default function WeatherOfCities({
  citiesWeather,
  isMetric,
  switchIsMetric,
}: WeatherOfCitiesT) {
  return (
    <>
      {citiesWeather.map((cityWeather) => {
        return (
          <CityWeather
            key={cityWeather.current.condition.code}

            weather={cityWeather}
            isMetric={isMetric}
            switchIsMetric={switchIsMetric}
          />
        );
      })}
    </>
  );
}
