import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let createError;
    if (error) {
        createError = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef?.current?.value;
        console.log(email);
        await sendPasswordResetEmail(email);
        toast('Sent Email');
    }

    let load;
    if (loading || sending) {
        load = <Loading></Loading>
    }

    const handleLogin = async(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className='w-75 mx-auto shadow container my-5 p-4'>
            <h1 className='text-center'>LogIn</h1>
            <Form onSubmit={handleLogin} className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} className='py-3' type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='py-3' type="password" name='password' placeholder="Password" />
                </Form.Group>


                <p>{createError}</p>
                <p>{load}</p>
                <Button onClick={() => toast(`${error ? error.message : 'you are log in'}`)} className='w-100 py-3 mt-4' variant="primary" type="submit">Login</Button> 
                

                <p className='mt-3'>Are You new to my site? <span className=''><Link to={'/registration'}>Registration first</Link></span></p>

                <p className='mt-3'>Forget Password?
                    <button
                    className='btn btn-link' onClick={resetPassword}>
                    Reset Password
                </button></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;