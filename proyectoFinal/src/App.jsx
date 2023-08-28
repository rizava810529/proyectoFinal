import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardWeather from './components/cardWeather/CardWeather';
import CardDias from './components/cardDias/CardDias';
import brujula from './assets/brujula.png';
import Cloud from './assets/Cloud.png';
import Shower from './assets/Shower.png'
import posicion from './assets/posicion.png'
function App() {
  const [weatherData, setWeatherData] = useState({
    city: '',
    country: '',
    humidity: '',
    wind: '',
    visibility: '',
    pressure: '',
  });

  const [forecastData, setForecastData] = useState([]);

  const [inputCity, setInputCity] = useState('');

  const fetchData = async (city) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: 'cc29bb8c66bae14bbfd61c37dc5f5e51',
        },
      });

      const data = response.data;
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        visibility: data.visibility,
        pressure: data.main.pressure,
      });

      const forecastResponse = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
          q: city,
          appid: 'cc29bb8c66bae14bbfd61c37dc5f5e51',
        },
      });

      const forecastList = forecastResponse.data.list;

      const nextSixDays = forecastList.filter(item => {
        const date = new Date(item.dt * 1000);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const differenceInDays = Math.floor((date - today) / (24 * 60 * 60 * 1000));
        return differenceInDays >= 1 && differenceInDays <= 6;
      });

      setForecastData(nextSixDays);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData('berlin');
  }, []);

  const handleCityChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleFetchWeather = () => {
    fetchData(inputCity);
  };


  const fechaActual = new Date();

  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1;
  const dia = fechaActual.getDate();

  const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;

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
        <CardDias forecastData={forecastData} />
      </div>




      <div className='container '>

        <div >
          <div className='d-flex justify-content-between align-items-center  m-4'>
            <div className=' p-3'>
              <button className='btn'>Search for places</button></div>
            <div>
              <img src={brujula} alt="Ejemplo" width={50} /></div>
          </div>
          <div className='background-div'>
            <img src={Shower} alt="Shower" width={300} className='' /></div>
        </div>
        <div className='text  m-5'>
          15°C
        </div>
        <div className='text1 m-3'>
          <p>Shower</p>
        </div>
        <div class="text-white m-3">
          <p>Today: {fechaFormateada}</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <div d-flex justify-content-center align-items-center>
            <img src={posicion} alt="Ejemplo" width={20}></img>
          </div>
          <div className='text-white m-3'>
            <p>Helsinki</p>
          </div>
        </div>
        
      </div>

      <div className='col-md-9'>
        <div className=''>
          <div className=''>

          </div>
          <div>

          </div>
        </div>
        <div className=''>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>










    </div>



















  );
}

export default App;
