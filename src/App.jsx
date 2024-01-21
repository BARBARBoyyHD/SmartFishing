// src/App.jsx
import React from 'react';
import FishingLocation from './components/FishingLocation.jsx';
import WeatherInfo from './components/WeatherInfo.jsx';
import FishSpecies from './components/FishSpecies.jsx';
import Recommendation from './components/Recommendation.jsx';
import './App.css';

const api ={
  key :"fa75118dd8823aad98600b9fc894a11e",
  base :"https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Smart Fishing</h1>
      </header>
      
      <div className="section">
        <WeatherInfo />
      </div>

      <div className="section">
        <FishingLocation />
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
