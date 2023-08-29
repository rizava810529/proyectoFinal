// Ciudad.js
import React from 'react';

function Ciudad({ inputCity, handleCityChange, handleFetchWeather, celsiusTemperature, fechaFormateada, weatherData, previousSearches }) {
  return (
    <div className="input-container mt-3">
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
      <div className="mt-4">
       
        <p>Visualizando pronostico de la ciudad de:</p>
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <p>{weatherData.city}</p>
          </div>
        </div>
      </div>
      {previousSearches.length > 0 && (
        <div className="mt-4">
          <h4>Previous Searches:</h4>
          <ul>
            {previousSearches.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Ciudad;
