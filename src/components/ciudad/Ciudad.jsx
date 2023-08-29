// Ciudad.js
import React from 'react';

function Ciudad({ inputCity, handleCityChange, handleFetchWeather, celsiusTemperature, fechaFormateada, weatherData, previousSearches }) {
    return (
        
        <div className='gap-3'>
            <div className="input-container text-white p-3" style={{ backgroundColor: '#1E213A', width: '400px', height: '791px' }}>
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

                <p>Viewing forecast of the city of:</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <p>{weatherData.city}</p>
                    </div>
                </div>
            </div>
            {previousSearches.length > 0 && (
                <div className="mt-4">
                    <h4>Previous Searches:</h4>
                    <div>
                        {previousSearches.map((city, index) => (
                            <li key={index}>{city}</li>
                        ))}
                    </div>
                </div>
            )}
        </div>







        </div>


        
        
    );
}

export default Ciudad;