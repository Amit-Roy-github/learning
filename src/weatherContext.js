import React, { createContext, useState, useContext } from 'react';
import  fetchData  from './fetchData';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAndSetWeatherData = async (location) => {
    try {
      const data = await fetchData(location);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data');
      setWeatherData(null);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, error, fetchAndSetWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
