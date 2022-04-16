import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <div id='services' className = 'my-5 pt-5 p-5 bg-light shadow m-5' >
            <h1 className='fw-bolder shadow py-3'>Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5 mt-3">
            {
                services.map(service => < Service
                    key={service.id}
                    service={service}
                > </Service>)
            }
            </div>

        </div>
    );
};

export default Services;