import React from 'react';

const CardWeather = ({ weatherData }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h1 className="card-title">Weather in {weatherData.city}, {weatherData.country}</h1>
        <p className="card-text">Humidity: {weatherData.humidity}%</p>
        <p className="card-text">Wind Status: {weatherData.wind.speed} m/s</p>
        <p className="card-text">Visibility: {weatherData.visibility} meters</p>
        <p className="card-text">Air Pressure: {weatherData.pressure} hPa</p>
      </div>
    </div>
  );
};

export default CardWeather;
