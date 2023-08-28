import React from 'react';
import './CardWeather.css';

const CardWeather = ({ weatherData , celsiusTemperature }) => {
  

  return (
    <div className="card" >
      <div className="card-body" >
        <div className='' >
          <p className="card-text" >Humidity: {weatherData.humidity}%</p>
        </div>
        <div>
          <p className="card-text">Wind Status: {weatherData.wind} m/s</p>
        </div>
        <div>
          <p className="card-text">Visibility: {weatherData.visibility} meters</p>
        </div>
        <div>
          <p className="card-text">Air Pressure: {weatherData.pressure} hPa</p>
        </div>
        <div>
          <h1 className="card-title">Weather in {weatherData.city}, {weatherData.country}</h1>
        </div>
        <div>
          <p className="card-text">Temperature: {celsiusTemperature}°C</p>
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
