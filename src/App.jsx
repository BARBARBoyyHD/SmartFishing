// src/App.jsx
import React from 'react';
import FishingLocation from './components/FishingLocation.jsx';
import WeatherInfo from './components/WeatherInfo.jsx';
import FishSpecies from './components/FishSpecies.jsx';
import Recommendation from './components/Recommendation.jsx';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Smart Fishing</h1>
      </header>

      <div className="section">
        <FishingLocation />
      </div>

      <div className="section">
        <WeatherInfo />
      </div>

      <div className="section">
        <FishSpecies />
      </div>

      <div className="section">
        <Recommendation/>
      </div>
    </div>
  );
}

export default App;
