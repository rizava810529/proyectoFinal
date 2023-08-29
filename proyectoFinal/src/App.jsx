import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardWeather from './components/cardWeather/CardWeather';
import CardDias from './components/cardDias/CardDias';
import brujula from './assets/brujula.png';
import Cloud from './assets/Cloud.png';
import Shower from './assets/Shower.png'
import posicion from './assets/posicion.png'
import Ciudad from '../src/components/ciudad/Ciudad'

function App() {
  const [weatherData, setWeatherData] = useState({
    city: '',
    country: '',
    humidity: '',
    wind: '',
    visibility: '',
    pressure: '',


  });

  const handleFetchWeather = () => {
    if (inputCity.trim() !== '') {
      fetchData(inputCity);
      setInputCity(''); // limpiar el imput
    }
  };

  const [forecastData, setForecastData] = useState([]);

  const [inputCity, setInputCity] = useState('');

  const [previousSearches, setPreviousSearches] = useState([]);

  const [showSearchInput, setShowSearchInput] = useState(false); // Agrega esta variable de estado



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
        temperature: data.main.temp,
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

      setPreviousSearches(prevSearches => [data.name, ...prevSearches]);
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




  const fechaActual = new Date();

  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1;
  const dia = fechaActual.getDate();

  const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
  const celsiusTemperature = (weatherData.temperature - 273.15).toFixed(1);
  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };






  return (
    <div className="App  ">

      <Ciudad
        inputCity={inputCity}
        handleCityChange={handleCityChange}
        handleFetchWeather={handleFetchWeather}
        celsiusTemperature={celsiusTemperature}
        fechaFormateada={fechaFormateada}
        weatherData={weatherData}
        previousSearches={previousSearches}
      ></Ciudad>


      <div className='d-flex justify-content-between align-items-center '>

        {/*parte izquierda */}
        <div className='container' style={{ width: '50%', height: '790px' }}>

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
            <div>
              <p className="card-text" >{celsiusTemperature}°C</p>
            </div>
          </div>
          <div className='text1 m-3'>
            <p>Shower</p>
          </div>
          <div className="text-white m-3">
            <p>Today: {fechaFormateada}</p>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className="d-flex justify-content-center align-items-center">
              <img src={posicion} alt="Ejemplo" width={20}></img>
            </div>
            <div className='text-white m-3'>
              <p>Berlin</p>
            </div>
          </div>

        </div>
        {/* end parte izquierda */}

        {/* parte derecha */}
        <div className='container2 h-100'>

          <div className='h-100 d-flex flex-column justify-content-center gap-3'>

            <div className='d-flex justify-content-end align-items-center '>
              <button className='btn-circle m-3'>°C</button>
              <button className='btn-circle m-3'>°F</button>
            </div>

            <div className='m-3'>
              <CardDias forecastData={forecastData} />
            </div>
            <div>
              <h1 className='text-white  d-flex justify-content-start align-items-center m-3 m-5'>Today's Hightlights</h1>
            </div>

            <div className='h-100 d-flex justify-content-center align-items-center' >

              <div className='border  m-3 text-white d-flex justify-content-center align-items-center' style={{ backgroundColor: '#1E213A', width: '50%', height: '65px' }} >
                <p className="card-text">Wind Status: {weatherData.wind} m/s</p>
              </div>
              <div className='border m-3' style={{ backgroundColor: '#1E213A', width: '50%', height: '65px' }} >
                <div>
                  <p className="card-text text-white h-100 d-flex justify-content-center align-items-center">Humidity: {weatherData.humidity}% </p>
                </div>

                <div className='m-1'>
                  <div class="progress" style={{ height: '20px' }}>
                    <div class="progress-bar" role="progressbar" style={{ width: `${(weatherData.humidity / 100) * 100}%` }} aria-valuenow={weatherData.humidity} aria-valuemin="0" aria-valuemax="100">
                      {weatherData.humidity}%
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className='h-100 d-flex justify-content-center align-items-center'>
              <div className='border fondo-2 m-3 text-white d-flex justify-content-center align-items-center' style={{ backgroundColor: '#1E213A', width: '50%', height: '40px' }}>
                <p className="card-text text-white">Visibility: {weatherData.visibility} meters</p>
              </div>
              <div className='border fondo-2 m-3 text-white d-flex justify-content-center align-items-center' style={{ backgroundColor: '#1E213A', width: '50%', height: '40px' }}>
                <p className="card-text">Air Pressure: {weatherData.pressure} hPa</p>
              </div>
            </div>

          </div>

          <div className='h-100 d-flex justify-content-center align-items-center'>
            <p>createc by username-devChallengues.io</p>
          </div>

        </div>


      </div>






    </div>

  );
}





export default App;