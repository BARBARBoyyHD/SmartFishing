import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

import WeatherInfo from './components/WeatherInfo.jsx';
import FishSpecies from './components/FishSpecies.jsx';
import Recommendation from './components/Recommendation.jsx';
import AboutUs from './components/AboutUs.jsx'; 
import BeginnersGuide from './components/BeginnersGuide.jsx';
import Login from './components/Login.jsx';
import './app.css';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [lastPath, setLastPath] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(username);
    if (lastPath) {
      navigate(lastPath); 
      const container = document.querySelector('.login-container');
      container.classList.add('logged-in'); // Redirect to the last visited path after login
    } else {
      navigate('/'); // Redirect to the home page if there's no last visited path
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    
      <div>
        {isAuthenticated && (
          <nav className="navbar">
            <Link to="/"><h1 className="logo">Smart Fishing</h1></Link>
            <Link to="/about"><h1>About us</h1></Link>
            <Link to="/beginners"><h1>BeginnersGuide</h1></Link>
            <p className='welcome'>Welcome, {user}!</p> {/* Display welcome message */}
            <button onClick={handleLogout}>Logout</button> {/* Logout button */}
          </nav>
        )}

        <div className="container">
          <Routes>
            <Route path="/log" element={<Login onLogin={handleLogin} />} />
            {!isAuthenticated && (
              <Route
                path="*"
                element={
                  <Navigate
                    to="/log"
                    replace // Replace the last path with /log to avoid stacking /log on back button
                  />
                }
              />
            )}
            {isAuthenticated && (
              <>
                <Route
                  path="*"
                  element={
                    <Navigate
                      to="/" // Redirect all unmatched paths to the home page
                      replace // Replace the last path with / to avoid stacking it on the back button
                    />
                  }
                />
                <Route path="/" element={<WeatherInfo />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/beginners" element={<BeginnersGuide />} />
                <Route path="/fish" element={<FishSpecies />} />
                <Route path="/recommendation" element={<Recommendation />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
