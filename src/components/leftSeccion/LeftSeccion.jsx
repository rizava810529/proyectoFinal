
import brujula from '../../assets/brujula.png';
import Shower from '../../assets/Shower.png';
import posicion from '../../assets/posicion.png';
import React, { useState, useEffect } from 'react';

const LeftSection = ({ celsiusTemperature, fechaFormateada, handleSearchClick }) => {
    const [searchClicked, setSearchClicked] = useState(false);
    const [fahrenheitTemperature, setFahrenheitTemperature] = useState(null);


    const handleButtonClick = () => {
        setSearchClicked(true);
        handleSearchClick();
    };


    const convertToFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    };

    useEffect(() => {
        if (celsiusTemperature !== null) {
            const fahrenheit = convertToFahrenheit(celsiusTemperature);
            setFahrenheitTemperature(fahrenheit);
        }
    }, [celsiusTemperature]);





    if (searchClicked) {
        return null; // No renderizar nada en este componente cuando se hace clic en la búsqueda
    }


    return (
        <div className='container' style={{ height: '775px' }}>
            <div>
                <div className='d-flex justify-content-between align-items-center  m-4'>
                    {/* btn */}
                    <div className=' p-3'>
                        <button className='btn' onClick={handleButtonClick}>Search for places</button>
                    </div>
                    <div>
                        <img src={brujula} alt="Ejemplo" width={50} />
                    </div>
                </div>
                <div className='background-div'>
                    <img src={Shower} alt="Shower" width={300} className='' />
                </div>
            </div>
            {/*  temperatura */}
            <div className='text m-5  '>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className="card-text">{celsiusTemperature}°C/</p>
                    {fahrenheitTemperature !== null && (
                        <p className="card-text">{fahrenheitTemperature.toFixed(2)}°F</p>
                    )}
                </div>
            </div>



            <div className='text1 m-3'>
                <p>Shower</p>
            </div>
            <div className="text-white m-3">
                <p>Today: {fechaFormateada}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={posicion} alt="Ejemplo" width={20} />
                </div>
                <div className='text-white m-3'>
                    <p>Berlin</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSection;