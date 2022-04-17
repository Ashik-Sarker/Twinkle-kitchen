import React from 'react';
import pro from '../../images/New folder/profilepic.png';

const About = () => {
    return (
        <div className="container mt-5 shadow px-4">
            <div className="row row-cols-1 row-cols-md-2 ">
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
            <div className="row row-cols-1 mb-5 py-5"> 
                <div className="col">
                    <div className="card h-100">
                    <div className="card-body">
                        <h5 className="py-2 card-title text-center fs-3" style={{color:"orange", borderBottom: "1px solid", borderImage: "linear-gradient(#f7d516, #ec3a1b) 20"}}>Mission Vision & Goals</h5>
                        <p className="card-text mt-4 p-4">I am Ashik. I have completed my graduation from <span className='text-warning'>United International University</span> at Computer Science & Engineering Department. After completing my graduation I want to do something different like new be Entrepreneur. But It was very challenging and I have not enough time. After all I am cse graduate so that I am thinking new thinks like new technologies which would changes peoples life and make easy an fun. At this moment the new year 2022 I have a plan and it is big. I want to be a "Full Stack Web Developer" which is challenging for me. After that I am going to do hard work , after three and half month I am making many of practice website include this. Which all are developing at FrontEnd side. My mission in 2022 I want to be a very good React developer and pick a very good job also where I can learn more. My Final Goal is that I want to be very good learner and technology hunter and also a very good developer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;