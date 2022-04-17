import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div style={{height:"200px"}} className="bg-dark text-light d-flex justify-content-center align-items-center mt-5">
            <p>Copyright @ {year} <span className='text-warning'>by Eng. Ashik Sarker</span></p>
        </div>
    );
};

export default Footer;