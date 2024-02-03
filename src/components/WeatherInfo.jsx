import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FishingLocation = ({ locationName, shouldFlyTo }) => {
  const [marker1Position, setMarker1Position] = useState([-6.903380560456988, 107.62039460301402]);
  const [marker2Position, setMarker2Position] = useState([-6.905547860750985, 107.61565213414252]);

  const SearchMap = () => {
    const map = useMap();

    useEffect(() => {
      if (shouldFlyTo) {
        const apiKey = 'AIzaSyD7rE3576HEVB5CJ_kX2h8cwfEuWgS5kBg';
        const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=${apiKey}`;

        fetch(geocodingUrl)
          .then(response => response.json())
          .then(data => {
            const { results } = data;
            if (results && results.length > 0) {
              const { lat, lng } = results[0].geometry.location;
              map.flyTo([lat, lng], 13);
            }
          })
          .catch(error => console.error('Error fetching geocoding data:', error));
      }
    }, [locationName, map, shouldFlyTo]);

    return null;
  };

  return (
    <div>
      <h2>Fishing Location</h2>
      <div style={{ height: '400px' }}>
        <MapContainer center={[0, 0]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <SearchMap />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker 1 */}
          <Marker position={marker1Position}>
            <Popup>
              tempat pancing 2
            </Popup>
          </Marker>
          {/* Marker 2 */}
          <Marker position={marker2Position}>
            <Popup>
              tempat pancing sijalik
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

const WeatherInfo = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [shouldFlyTo, setShouldFlyTo] = useState(false);

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
      setShouldFlyTo(true);
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
      <p>{weather.name}</p>
      <p>{weather.main?.temp}C</p>
      <p>{weather.weather?.[0]?.main}</p>
      <p>({weather.weather?.[0]?.description})</p>
      <FishingLocation locationName={search} shouldFlyTo={shouldFlyTo} />
    </div>
  );
};

export default WeatherInfo;
