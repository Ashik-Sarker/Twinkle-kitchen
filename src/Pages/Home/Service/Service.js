import React from 'react';
// import { Card, Col } from 'react-bootstrap';
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
                <button className='border-0 bg-dark text-light py-3 fs-4 fw-bold'>Get Service</button>
            </div>
        </div>
    );
};

export default Service;