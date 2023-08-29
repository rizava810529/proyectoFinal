import React from 'react';
import brujula from '../assets/brujula.png';
import Shower from '../assets/Shower.png';
import posicion from '../assets/posicion.png';

const LeftSection = ({ celsiusTemperature, fechaFormateada }) => {
  return (
    <div className='container'>
      <div>
        <div className='d-flex justify-content-between align-items-center  m-4'>
          <div className=' p-3'>
            <button className='btn'>Search for places</button>
          </div>
          <div>
            <img src={brujula} alt="Ejemplo" width={50} />
          </div>
        </div>
        <div className='background-div'>
          <img src={Shower} alt="Shower" width={300} className='' />
        </div>
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
