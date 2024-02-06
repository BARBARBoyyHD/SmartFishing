import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Weather.css'
import Marker1Icon from './mancing1.jpg';
import Marker2Icon from './kali.jpg';
import Marker3Icon from './usaha-kolam-pancing.jpg';
import Marker4Icon from './mancing4.jpg';
import Marker5Icon from './mancing5.jpg';
import Marker6Icon from './mancing6.jpg';
import Marker7Icon from './mancing7.jpg';
import Marker8Icon from './mancing8.jpg';








const FishingLocation = ({ locationName, shouldFlyTo }) => {
  const [marker1Position, setMarker1Position] = useState([-6.8937,107.6420]);
  const [marker2Position, setMarker2Position] = useState([-6.90249,107.62867]);
  const [marker3Position, setMarker3Position] = useState([-6.91340,107.61781]);
  const [marker4Position, setMarker4Position] = useState([-6.9013,107.6062]);
  const [marker5Position, setMarker5Position] = useState([-6.8855,107.5605]);
  const [marker6Position, setMarker6Position] = useState([-6.8572,107.5865]);
  const [marker7Position, setMarker7Position] = useState([-6.8942,107.5324]);
  const [marker8Position, setMarker8Position] = useState([-6.9298,107.6329]);

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
      <div style={{ height: '610px' }}>
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
      <h3>Pemancingan cinong</h3>
      <img src={Marker1Icon} alt="Marker 1" style={{ width: '70%', height: 'auto' }} />
      <h4>Jl. Cikutra No.201, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124</h4>
      <h4>081380803123</h4>
      <h4>Jenis ikan yang tersedia : Lele, Bawal, Gurami, Mujair</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 2 */}
<Marker position={marker2Position}>
  <Popup>
    <div>
      <h3>tempat pancing sijalik</h3>
      <img src={Marker2Icon} alt="Marker 2" style={{ width: '70%', height: 'auto' }} />
      <h4>Jalan Muararajeun Kulon, Cihaurgeulis, Cibeunying Kaler,Bandung,40122</h4>
      <h4>+628126898852</h4>
      <h4>Jenis ikan yang tersedia : Gurami, Patin, Mujair</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 3 */}
<Marker position={marker3Position}>
  <Popup>
    <div>
      <h3>tempat pancing simamat</h3>
      <img src={Marker3Icon} alt="Marker 3" style={{ width: '100%', height: 'auto' }} />
      <h4>Jalan Lombok, Merdeka, Sumur Bandung, Bandung, 40113</h4>
      <h4>+6281267877752</h4>
      <h4>Jenis ikan yang tersedia : Bawal, Patin, Mujair, Gurami, Ikan Mas</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 4 */}
<Marker position={marker4Position}>
  <Popup>
    <div>
      <h3>Pemancingan Pa Cucu</h3>
      <img src={Marker4Icon} alt="Marker 4" style={{ width: '70%', height: 'auto' }} />
      <h4>Jl. Linggawastu No.291, Tamansari, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40116</h4>
      <h4>Jenis ikan yang tersedia : Lele, Patin, Mujair</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 5 */}
<Marker position={marker5Position}>
  <Popup>
    <div>
      <h3>Kolam Pemancingan Al-Ashr</h3>
      <img src={Marker5Icon} alt="Marker 5" style={{ width: '70%', height: 'auto' }} />
      <h4>Jl. Pesantren VI Gg. Mutisah No.55, Cibabat, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513</h4>
      <h4>085315320931</h4>
      <h4>Jenis ikan yang tersedia : Gurami, Mujair, Ikan Mas, Nila</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 6 */}
<Marker position={marker6Position}>
  <Popup>
    <div>
      <h3>Mr. H. Suhaya Fishing Pond</h3>
      <img src={Marker6Icon} alt="Marker 6" style={{ width: '70%', height: 'auto' }} />
      <h4>curug sigey, Jl. Geger Arum Baru No.5, Isola, Kec. Sukasari, Kota Bandung, Jawa Barat 40154</h4>
      <h4>081224811149</h4>
      <h4>Jenis ikan yang tersedia : Gabus, Lele, Patin</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 7 */}
<Marker position={marker7Position}>
  <Popup>
    <div>
      <h3>Kolam Pemancingan BRIGIF 15</h3>
      <img src={Marker7Icon} alt="Marker 7" style={{ width: '70%', height: 'auto' }} />
      <h4>4G4J+R9F, Baros, Cimahi Tengah, Cimahi City, West Java 40521</h4>
      <h4>Jenis ikan yang tersedia : Nila, Ikan Mas, Bawal, Gurami, Mujair</h4>
    </div>
  </Popup>
</Marker>
{/* Marker 8 */}
<Marker position={marker8Position}>
  <Popup>
    <div>
      <h3>Kolam Pemancingan Kijang Cakti</h3>
      <img src={Marker8Icon} alt="Marker 8" style={{ width: '70%', height: 'auto' }} />
      <h4>Jl. Turangga Barat Baru No.12, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40263</h4>
      <h4>Jenis ikan yang tersedia : Ikan Mas, Gurami, Mujair</h4>
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

    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    let weatherImage = null;

  // Check weather conditions and set image accordingly
  
}

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
          <p className='name'>{weather.name}</p>
          <p className='temp'>{weather.main?.temp}C</p>
          <p className='weather'>{weather.weather?.[0]?.main}</p>
          <p className='desc'>({weather.weather?.[0]?.description})</p>
        </div>
      </div>
      <div>
        <FishingLocation locationName={search} shouldFlyTo={shouldFlyTo} />
      
      </div>
    </div>
  );
};


export default WeatherInfo;