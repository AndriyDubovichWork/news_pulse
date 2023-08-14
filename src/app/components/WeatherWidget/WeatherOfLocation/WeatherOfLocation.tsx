import React from 'react';
import CityWeather from './CityWeather/CityWeather';

type WeatherOfLocationT = {
  worldWeather: WeatherT[];
  isMetric: boolean;
  switchIsMetric: () => void;
};

function WeatherOfLocation({
  worldWeather,
  isMetric,
  switchIsMetric,
}: WeatherOfLocationT) {
  return (
    <>
      {worldWeather.map((cityWeather) => {
        return (
          <CityWeather
            weather={cityWeather}
            isMetric={isMetric}
            switchIsMetric={switchIsMetric}
          />
        );
      })}
    </>
  );
}

export default WeatherOfLocation;
