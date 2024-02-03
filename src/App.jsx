// src/App.jsx
import React from 'react';
import WeatherInfo from './components/WeatherInfo.jsx';
import FishSpecies from './components/FishSpecies.jsx';
import Recommendation from './components/Recommendation.jsx';
import MoreDetail from'./components/MoreDetail.jsx';
import './App.css';

const api ={
  key: "fa75118dd8823aad98600b9fc894a11e",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Smart Fishing</h1>
        <h1>About us </h1>
        <h1>Beginners guide </h1>
        <h1>login </h1>
        
      </nav>


        <div className="section">
          <WeatherInfo />
        </div>

        <div className="section">
          <FishSpecies />
        </div>

        <div className="section">
          <Recommendation />
        </div>
        <div className="section">
          <MoreDetail />
        </div>
      </div>
    
  )
}

export default App;
