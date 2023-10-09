import React, { Fragment } from 'react';
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
          <Fragment key={cityWeather.location.name}>
            {shouldShow && (
              <CityWeather
                weather={cityWeather}
                isMetric={isMetric}
                switchIsMetric={switchIsMetric}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
}
