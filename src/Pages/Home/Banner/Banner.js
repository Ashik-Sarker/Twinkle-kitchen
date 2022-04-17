import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/b1.jpg'
import banner2 from '../../../images/banner/b4.jpg'
import banner3 from '../../../images/banner/b3.jpg'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Be Designee</h3>
                <p>Her I am teaching you web design for more details visit my courses.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Be Developer</h3>
                <p>Her I am teaching you Web Development for more details visit my courses.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Authentication Expert</h3>
                <p>Her I am teaching you authentication for more details visit my courses.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;