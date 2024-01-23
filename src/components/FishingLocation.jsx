import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FishingLocation = () => {
  const [position, setPosition] = useState([-6.918444119915787, 107.61792251505564]); // Default coordinates for Kota Bandung

  useEffect(() => {
    // Use Google Maps Geocoding API to convert location name to coordinates
    const apiKey = 'AIzaSyD7rE3576HEVB5CJ_kX2h8cwfEuWgS5kBg';
    const locationName = 'Kota Bandung';
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=${apiKey}`;

    fetch(geocodingUrl)
      .then(response => response.json())
      .then(data => {
        const { results } = data;
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setPosition([lat, lng]);
        }
      })
      .catch(error => console.error('Error fetching geocoding data:', error));
  }, []);

  return (
    <div>
      <h2>Fishing Location</h2>
      <div style={{ height: '400px' }}>
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default FishingLocation;
