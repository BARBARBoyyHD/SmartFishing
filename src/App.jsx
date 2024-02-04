// src/App.jsx
import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo.jsx';
import FishSpecies from './components/FishSpecies.jsx';
import Recommendation from './components/Recommendation.jsx';
import Login from './components/Login.jsx';
import './App.css';

const api ={
  key: "fa75118dd8823aad98600b9fc894a11e",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Simulate successful login by setting the user
    setUser(username);
  };

  const handleLogout = () => {
    // Simulate logout by resetting the user
    setUser(null);
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Smart Fishing</h1>
        <h1>About us </h1>
        <h1>Beginners guide </h1>
        {user ? (
          <div className="user-block">
            <span className="user-info">Logged in as {user}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </nav>


        <div>
          <div className="section">
            <WeatherInfo />
          </div>

          <div className="section">
            <FishSpecies />
          </div>

          <div className="section">
            <Recommendation />
          </div>
        </div>
    </div>
  );
}

export default App;
