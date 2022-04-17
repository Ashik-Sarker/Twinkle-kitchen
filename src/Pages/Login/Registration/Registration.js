import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Common/Loading/Loading';

const Registration = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    let createError;
    if (error) {
        createError = <p className='text-danger'>Error: {error.message}</p>
    }
    if (loading) {
        createError = <Spinner animation="grow" />
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }

    return (
        <div className='w-50 mx-auto shadow container my-5 p-5'>
            <h1 className='text-center'>Registration</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='py-3' type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='py-3' type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='py-3' type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className='text-primary' type="checkbox" label="accept terms and conditions" />
                </Form.Group>

                <p>{createError}</p>
                <Button
                    disabled={!agree}
                    className='w-100 py-3 mt-4' variant="primary" type="submit"
                >Submit</Button>

                <p className='mt-3'>Already have an account? <span className=''><Link to={'/login'}>Please Login</Link></span></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Registration;