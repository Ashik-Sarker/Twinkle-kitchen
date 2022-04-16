import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='container my-5 py-5'>
            <h1>LogIn</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='py-3' type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='py-3' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='py-3' type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 py-3 mt-4' variant="primary" type="submit">Submit</Button>

                <p className='mt-3'>Already have an account? <span className=''><Link to={'/login'}>Please Login</Link></span></p>

                <Button className='w-100 py-3 mt-4' variant="primary" type="submit">Google Sign In</Button>
                <Button className='w-100 py-3 mt-4' variant="primary" type="submit">GitHub Sign In</Button>
            </Form>
        </div>
    );
};

export default Registration;