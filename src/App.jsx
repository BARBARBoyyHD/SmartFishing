import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WeatherInfo from './components/WeatherInfo.jsx';
import FishSpecies from './components/FishSpecies.jsx';
import Recommendation from './components/Recommendation.jsx';
import Login from './components/Login.jsx';
import AboutUs from './components/AboutUs.jsx'; 
import BeginnersGuide from './components/BeginnersGuide.jsx'
import './App.css';

const api ={
  key: "fa75118dd8823aad98600b9fc894a11e",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/"><h1 className="logo">Smart Fishing</h1></Link>
          <Link to="/about"><h1>About us</h1></Link>
          <Link to="/Beginners"><h1>BeginnersGuide</h1></Link>
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
            <Routes>
              <Route path="/" element={<WeatherInfo />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/Beginners" element={<BeginnersGuide />} />
              <Route path="/fish" element={<FishSpecies />} />
              <Route path="/recommendation" element={<Recommendation />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;