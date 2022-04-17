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
        <div id='services' className = 'container my-5 pt-4 text-center' >
            <h1 className='fs-2 py-4'>My Popular Courses</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5 p-3 pb-5">
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