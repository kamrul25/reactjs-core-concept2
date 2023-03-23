import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries (){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  } , []);
  // console.log(countries)
  return (
    <div>
      <h1 style={{color: 'red'}}>Visiting Rest of The Countries</h1>
      <p>Available Countries: {countries.length}</p>
      {
        countries.map(country =><Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  );
}

function Country(props){
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Population: {props.population}</p>
    </div>
  )
}
export default App;
