import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h1>Name: {props.name}</h1>
            <h2>Region: {props.region}</h2>
            <img src={props.src} alt="" />
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;