import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <div id='services' className = 'my-5 bg-light m-5 text-center' >
            <h1 className='fs-3 py-4 bg-success text-light'>Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5 mt-1 p-3">
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