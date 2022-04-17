import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/beef.js.jpg'
import banner2 from '../../../images/banner/beefBiriyani.jpg'
import banner3 from '../../../images/banner/chickenBiriyani.jpg'
import banner4 from '../../../images/banner/fishCurry.jpg'
import banner5 from '../../../images/banner/mangoJuice.jpg'
import banner6 from '../../../images/banner/pizza.jpg'

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
                <h3>Beef Curry</h3>
                <p>Her I am cooking for you delicious Beef Curry for more details visit Food Items.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Beef Biriyani</h3>
                <p>Her I am cooking for you delicious Beef Biriyani for more details visit Food Items.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner3}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Chicken Biriyani</h3>
                <p>Her I am cooking for you delicious Chicken Biriyani for more details visit Food Items.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner4}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Fish Curry</h3>
                <p>Her I am cooking for you delicious Fish Curry for more details visit Food Items.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner5}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Mango Juice</h3>
                <p>Her I am making for you wonderful Juices for more details visit Food Items.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"500px"}}
                className="d-block w-100"
                src={banner6}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Pizza</h3>
                <p>Her I am making for you delicious Pizza for more details visit Food Items.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;