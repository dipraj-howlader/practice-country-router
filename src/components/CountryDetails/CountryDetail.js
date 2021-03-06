import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {alpha3Code} = useParams();
    const [country , setCountry ] =useState([]);
    // console.log(country)
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
        fetch(url)
        .then(res => res.json())
        .then (data => setCountry(data))
    }, [])
    return (
        <div>
            <h1>Country Name : {country.name}</h1>
            <img style={{width:'200x', height:'200px'}} src={country.flag} alt=""/ >
            <h4>Capital : {country.capital}</h4>
            <p>Region : {country.region}</p>
            <p>Population : {country.population}</p>
            <p>Area : {country.area}</p>
        </div>
    );
};

export default CountryDetail;