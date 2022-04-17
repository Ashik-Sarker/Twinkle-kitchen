import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
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

    // const [sendPasswordResetEmail, sending, Reseterror] = useSendPasswordResetEmail(auth);
    // if (sending) {
    // return <p>Loading...</p>;
    // }

    const handleLogin = async(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        
        // await sendPasswordResetEmail(email);
        // alert('Sent email');

    }
    return (
        <div className='w-50 mx-auto shadow container my-5 p-5'>
            <h1 className='text-center'>LogIn</h1>
            <Form onSubmit={handleLogin} className="">
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
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;