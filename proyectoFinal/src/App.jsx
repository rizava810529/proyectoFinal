import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardWeather from './components/cardWeather/CardWeather';

function App() {
  const [weatherData, setWeatherData] = useState({
    city: '',
    country: '',
    humidity: '',
    wind: '',
    visibility: '',
    pressure: '',
  });
  
  const [inputCity, setInputCity] = useState(''); // Nuevo estado para la ciudad ingresada por el usuario

  const fetchData = async (city) => { // Recibe la ciudad como parámetro
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: 'cc29bb8c66bae14bbfd61c37dc5f5e51',
        },
      });

      const data = response.data;
      console.log('API Response:', data);
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind,
        visibility: data.visibility,
        pressure: data.main.pressure,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData('berlin'); // Inicialmente carga datos para Berlin
  }, []);

  const handleCityChange = (event) => {
    setInputCity(event.target.value); // Actualiza el estado con la ciudad ingresada
  };

  const handleFetchWeather = () => {
    fetchData(inputCity); // Llama a fetchData con la ciudad ingresada por el usuario
  };

  return (
    <div className="App">
      <div className="input-container mt-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            value={inputCity}
            onChange={handleCityChange}
          />
          <button
            className="btn btn-primary"
            onClick={handleFetchWeather}
          >
            Send
          </button>
        </div>
      </div>
      <div className="mt-4">
        <CardWeather weatherData={weatherData} />
      </div>
    </div>
  );

}

export default App;
