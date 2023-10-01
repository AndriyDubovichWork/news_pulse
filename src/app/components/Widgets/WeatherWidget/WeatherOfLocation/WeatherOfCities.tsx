import React from 'react';
import CityWeather from './CityWeather/CityWeather';
type WeatherOfCitiesT = {
  citiesWeather: WeatherT[];
  isMetric: boolean;
  isWideScreen: boolean;
  switchIsMetric: () => void;
};

export default function WeatherOfCities({
  citiesWeather,
  isMetric,
  switchIsMetric,
  isWideScreen,
}: WeatherOfCitiesT) {
  return (
    <>
      {citiesWeather.map((cityWeather, id) => {
        const shouldShow = isWideScreen || id <= 1;
        return (
          <>
            {shouldShow && (
              <CityWeather
                key={cityWeather.current.condition.code}
                weather={cityWeather}
                isMetric={isMetric}
                switchIsMetric={switchIsMetric}
              />
            )}
          </>
        );
      })}
    </>
  );
}
