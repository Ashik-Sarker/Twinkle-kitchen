import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let createError;
    if (error) {
        createError = <p>Error: {error.message}</p>
    }
    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password);

    }
    return (
        <div className='container my-5 py-5'>
            <h1>LogIn</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='py-3' type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='py-3' type="password" name='password' placeholder="Password" />
                </Form.Group>

                <p>{createError}</p> 
                <Button className='w-100 py-3 mt-4' variant="primary" type="submit">Login</Button> 
                

                <p className='mt-3'>Are You new to my site? <span className=''><Link to={'/registration'}>Registration first</Link></span></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;