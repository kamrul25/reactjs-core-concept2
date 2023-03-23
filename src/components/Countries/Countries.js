import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    console.log(countries)
    return (
        <div>
            <h1>Available Countries: {countries.length}</h1>
            <div className="countries">
            {
                countries.map(country =><Country name={country.name.common} region={country.region} population={country.population} src={country.flags.png}></Country> )
            }
            </div>
        </div>
    );
};

export default Countries;