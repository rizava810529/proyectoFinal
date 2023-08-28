import React from 'react';

const CardDias = ({ forecastData }) => {
  // Agrupar los datos por día
  const groupedForecastData = forecastData.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const dateString = date.toLocaleDateString();
    if (!acc[dateString]) {
      acc[dateString] = item;
    }
    return acc;
  }, {});

  return (
    <div>
      <h2>Next 6 Days</h2>
      {Object.values(groupedForecastData).map((item, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">Date: {new Date(item.dt * 1000).toLocaleDateString()}</h5>
            <p className="card-text">Temperature: {item.main.temp} K</p>
            {/* Agrega más detalles del pronóstico si es necesario */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDias;
