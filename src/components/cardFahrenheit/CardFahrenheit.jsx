import React from 'react';
import clear from "../../assets/Clear.png";
import HeavyCloud from "../../assets/HeavyCloud.png";
import HeavyRain from "../../assets/HeavyRain.png";
import LightCloud from "../../assets/LightCloud.png";
import lightRain from "../../assets/LightRain.png";
import Shower from "../../assets/Shower.png";
import Sleet from "../../assets/Sleet.png";
import Snow from "../../assets/Snow.png";
import Thunderstorm from "../../assets/Thunderstorm.png";

import "../cardDias/CardDias.css"

const CardFahrenheit = ({ forecastData }) => {
  const weatherIcons = {
    Clear: clear,
    Clouds: HeavyCloud,
    Rain: HeavyRain,
    LightCloud: LightCloud,
    LightRain: lightRain,
    Showers: Shower,
    Sleet: Sleet,
    Snow: Snow,
    Thunderstorm: Thunderstorm,
  };

  const groupedForecastData = forecastData.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const dateString = date.toLocaleDateString();
    if (!acc[dateString]) {
      const temperatureCelsius = item.main.temp - 273.15;
      const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

      acc[dateString] = {
        ...item,
        predominantWeather: item.weather[0].main,
        temperatureCelsius: temperatureCelsius,
        temperatureFahrenheit: temperatureFahrenheit,
      };
    }
    return acc;
  }, {});

  return (
    <div>
      <div className='h-100 d-flex justify-content-center align-items-center gap-2 text-white'>
        {Object.values(groupedForecastData).map((item, index) => (
          <div key={index} className="card" style={{ backgroundColor: '#1E213A' }} >
            <div className="card-body">
              <h5 className="card-title">{new Date(item.dt * 1000).toLocaleDateString()}</h5>
              <div >
                <img src={weatherIcons[item.predominantWeather]} alt="Weather Icon" style={{ width: '40px', height: '40px' }} />
              </div>
              <p className="card-text">{item.predominantWeather}</p>
              <p className="card-text">{item.temperatureFahrenheit.toFixed(2)} °F</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFahrenheit;
