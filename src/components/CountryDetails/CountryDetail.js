import React from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {alpha3Code} = useParams()
    return (
        <div>
            <h1>aicccccccc{alpha3Code}</h1>
        </div>
    );
};

export default CountryDetail;