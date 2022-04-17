import React from 'react';
import pro from '../../images/New folder/profilepic.png';
import banner1 from '../../images/banner/b1.jpg'
import banner2 from '../../images/banner/b2.jpg'
import banner3 from '../../images/banner/b3.jpg'

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2 shadow">
                <div className="col">
                    <img className='w-75 rounded-circle mb-3 ms-5' src={pro} alt=""/>
                </div>
                <div className="col my-auto">
                    <h1 style={{ fontSize: "50px", borderLeft: "7px solid", borderImage: "linear-gradient(#f7d516, #ec3a1b) 20", paddingLeft: "20px" }}>Stay Focused on the
                    <br />
                    <span className="text-warning">Mission 2022</span></h1>
                    <p className="text-justify text-dark">Good bye 2021 and welcome to 2022. I think this year will be life changing year for me. Because of I am getting to set my mission. This year I have been taken a challenge to develope myself and explore new Technologies.</p>
                    <button className='btn-danger fw-bold border-0 px-4 py-2 rounded'>Explore Now</button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5 py-5">
                <div className="col">
                    <div className="card h-100">
                    <img src={banner1} className="card-img-top h-50" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center fs-3 bg-" style={{color:"orange", border: "1px solid", borderImage: "linear-gradient(#f7d516, #ec3a1b) 20"}}>Mission</h5>
                        <p className="card-text">Entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world’s best software company.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={banner2} className="card-img-top h-50" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center fs-3" style={{color:"orange", border: "1px solid", borderImage: "linear-gradient(#f7d516, #ec3a1b) 20"}}>Vision</h5>
                        <p className="card-text">We believe that buying software should be easy and fun. It should browse you happy and clear-looking, with money in your pocket. We also believe that everyone has the right to see.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={banner3} className="card-img-top h-50" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center fs-3" style={{color:"orange", border: "1px solid", borderImage: "linear-gradient(#f7d516, #ec3a1b) 20"}}>Goals</h5>
                        <p className="card-text">A long-term goal helps us to see the larger picture of an organization. It can be the overall direction to the team, project, and company, These goals can be three years, five years, or much longer too.</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default About;