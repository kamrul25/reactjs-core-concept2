import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, region, flags, population} =props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <h2>Region: {region}</h2>
            <img src={flags.png} alt="" className='image' />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;