import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';

const SocialLogin = () => {
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }
    let getError;
    if (error) {
        getError = <p>Error: {error.message}</p>
    }
    let from = location?.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (

        <div className='my-5'>
            <p className='text-danger'>{getError}</p>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='border w-50' style={{height:"1px"}}></div>
                <div className='mx-3'>or</div>
                <div className='border w-50' style={{height:"1px"}}></div>
            </div>
            <Form>
                <Button onClick={() => signInWithGoogle()} className='w-100 py-3 mt-4' variant="success">Google Sign In</Button>

                {/* <Button className='w-100 py-3 mt-4' variant="primary">GitHub Sign In</Button> */}
            </Form>
        </div>
    );
};

export default SocialLogin;