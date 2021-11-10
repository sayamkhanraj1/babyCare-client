import React from 'react';
import {Carousel} from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="700"
                    src="https://i.ibb.co/f95p2m7/banner1.jpg"
                    alt="first slide"
                    />
                  </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="700"
                    src="https://i.ibb.co/P1P8Cw7/banner2.jpg"
                    alt="second slide"
                   />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="700"
                    src="https://i.ibb.co/M7v7ShM/banner3.jpg"
                    alt="second slide"
                   />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;