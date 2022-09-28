import React from 'react';
import Break from '../Break/Break';
import Profileinfo from '../Profileinfo/Profileinfo';
import './Details.css'

const Details = () => {
    return (
        <div className='details-container p-4'>
            <h1>I am Details</h1>
            <Profileinfo></Profileinfo>
            <Break></Break>
        </div>
    );
};

export default Details;