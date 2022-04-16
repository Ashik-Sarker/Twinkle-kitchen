import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, image, price, descriptions } = service;
    return (
        <div className="col">
            <div className="card service-shadow">
            <img src={image} className="card-img-top" style={{height:"400px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{descriptions}</p>
                <h3>{price}</h3>
                </div>
                <Link to={`/services/${id}`}>
                    <button className='w-100 border-0 bg-dark text-light py-3 fs-4 fw-bold'>Get Service</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;