import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs' className='bg-light shadow m-5 text-center'>
            <h1 className='shadow bg-success text-light py-2'>My Blogs</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 mt-3 p-3">
                <div className="col">
                    <div className="card h-100 shadow">
                    <div className="card-body p-5">
                        <h5 className="card-title mb-3">Q1. Difference between authentication vs authorization?</h5>
                        <p className="card-text">Authentication is the process of verifying who someone is and have access only user interface, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                    <div className="card-body p-5">
                        <h5 className="card-title mb-3">Q2. Why are you using firebase and What other option do you have implement authentication?</h5>
                        <p className="card-text">Firebase, Backend-as-a-Service, is a platform by Google that provides functionalities and helps with the backend development of Android, iOS, or web and even some products that support Unity3D too. And the other authentications systems are Cookie-Based authentication, Token-Based authentication, Third party access(OAuth, API-token), OpenId, SAML</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                    <div className="card-body p-5">
                        <h5 className="card-title mb-3">Q3. What other services firebase provide other than authentication?</h5>
                        <p className="card-text">Firebase provide authentication system other than that firebase provides more services like Firebase Database, Firebase Cloud Storage, Firebase Cloud Messaging, Firebase Remote Config</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;