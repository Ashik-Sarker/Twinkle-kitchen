import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../images/error/errorPage.jpg'

const NotFound = () => {
    return (
        <Container className='my-5 py-5'>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col className='px-5 my-auto' xs={12} md={6}>
                    <span>ERROR 404</span>
                    <h1>Oops! The page you are looking for isn't here</h1>
                    <p>You might have the wrong address, or the page may have moved.</p>
                    <div>
                        <Link to={'/'}>
                            <button className='border-0 px-5 py-2 mt-4 bg-success text-light fs-5'>Back to home</button>
                        </Link>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <img className='w-100 my-auto' src={error} alt="" srcset="" />
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;



