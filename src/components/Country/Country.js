import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, flag, capital, population, region, timezones } = props.country;

    return (
        <div className="country">
            <h1>{name}</h1>
            <img src={flag} alt="" /> <br />
            <small>Region: {region}</small>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <h5>Time Zone: {timezones}</h5>
        </div>
    );
};

export default Country;