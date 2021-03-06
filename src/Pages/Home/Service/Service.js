import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, image, price, descriptions } = service;
    return (
        <div className="col">
            <div className="card service-shadow h-100">
            <img src={image} className="card-img-top" style={{height:"200px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{descriptions}</p>
                <h3>Price: {price}</h3>
                </div>
                <Link to={`/services/${id}`}>
                    <button className='w-100 border-0 bg-dark text-light py-3 '>Get The food</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;