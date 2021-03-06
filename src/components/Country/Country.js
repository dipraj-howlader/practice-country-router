import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    // console.log(props);
    const { capital,name, region,alpha3Code} = props.country;
    const countryStyle ={
        border: '1px solid green',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px',

    }
    return (
        <div style={countryStyle}>
            <h3>Name: {name}</h3>
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
            <Link to={`/country/${alpha3Code}`}><p>Show details</p></Link>

        </div>
    );
};

export default Country;