// src/components/WeatherInfo.js
import axios from 'axios';
import React, { useState } from 'react';



const WeatherInfo = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const api = {
    key: "fa75118dd8823aad98600b9fc894a11e",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchPressed = async () => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='Weather'>
      <h2>Weather Information</h2>
      <div>
        <input
          type="text"
          placeholder='Enter City/Town...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>
      {/* Location */}
      <p>{weather.name}</p>
      {/* Temperature C */}
      <p>{weather.main?.temp}C</p>
      {/* Condition */}
      <p>{weather.weather?.[0]?.main}</p>
      <p>({weather.weather?.[0]?.description})</p>
    </div>
  );
};

export default WeatherInfo;

