import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Weather.css'
import Marker1Icon from './monkey-day-heres-when-it-is-celebrated.jpg';
import Marker2Icon from './kali.jpg';
import Marker3Icon from './usaha-kolam-pancing.jpg';


const FishingLocation = ({ locationName, shouldFlyTo }) => {
  const [marker1Position, setMarker1Position] = useState([-6.903380560456988, 107.62039460301402]);
  const [marker2Position, setMarker2Position] = useState([-6.896779887187106, 107.62714662471949]);
  const [marker3Position, setMarker3Position] = useState([-6.8997622147002176, 107.62128868040594]);

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
    <div>
      <h3>tempat pancing 2</h3>
      <img src={Marker1Icon} alt="Marker 1" style={{ width: '100%', height: 'auto' }} />
      <h4>Rp.115.000</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 2 */}
<Marker position={marker2Position}>
  <Popup>
    <div>
      <h3>tempat pancing sijalik</h3>
      <img src={Marker2Icon} alt="Marker 2" style={{ width: '100%', height: 'auto' }} />
    </div>
  </Popup>
</Marker>
{/* Marker 3 */}
<Marker position={marker3Position}>
  <Popup>
    <div>
      <h3>tempat pancing simamat</h3>
      <img src={Marker3Icon} alt="Marker 3" style={{ width: '100%', height: 'auto' }} />
    </div>
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
  const [fishingPlaces, setFishingPlaces] = useState([]);

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

      // Fetch fishing places if the city name is "Bandung"
      if (search === "Bandung") {
        const fishingPlacesData = [
          {
            id: 1,
            name: 'Pemancingan Saung Kemangi',
            rating: 4.5,
            address: 'Jl. Cipaku Indah X No.2, RW.4',
            facilities: ['Pancingan', 'Umpan'],
          },
          {
            id: 2,
            name: 'Pemancingan Balong Seng',
            rating: 4.2,
            address: 'EJL Islamic Centre No.1, RT.02/RW.01',
            facilities: ['Umpan', 'Jaring ikan'],
          },
          {
            id: 3,
            name: 'Pemancingan Dozzer pa RT',
            rating: 4.8,
            address: 'Jl. Rancabentang I No.27D, Ciumbuleuit',
            facilities: ['Enak untuk healing'],
          },
        ];
        setFishingPlaces(fishingPlacesData);
      } else {
        setFishingPlaces([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='Weather'>
      <center>
        <h2>Weather Information</h2>
      </center>
    
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="search-container">
          <div className="search-bar">
            <input
              type="search"
              placeholder='Enter City/Town...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
          </div>
        </div>

        <div>
          <p>{weather.name}</p>
          <p>{weather.main?.temp}C</p>
          <p>{weather.weather?.[0]?.main}</p>
          <p>({weather.weather?.[0]?.description})</p>
        </div>
      </div>
      <div>
        <FishingLocation locationName={search} shouldFlyTo={shouldFlyTo} />
       
      </div>
    </div>
  );
};


export default WeatherInfo;